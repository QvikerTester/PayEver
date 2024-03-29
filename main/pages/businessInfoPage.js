const {Key, By} = require('selenium-webdriver');
var BasePage = require ('../common/basePage.js');

class BusinessInfoPage extends BasePage {
    
    async fill_name(name)
    {
        await this.element_selector("'Invoice'", "'name'", name);
    }
    async fill_number(Number)
    {
        await this.element_selector("'Phone Number'", "'phoneNumber'", Number);
    }
    async get_started()
    {
        var buttonElement = this.find_element("//button[@class='signup-button']");
        (await buttonElement).click();
    }
    async select_industry()
    {
        this.find_elements("//peb-form-field-input")[1].click();
        var option = this.find_element("//mat-option");
        option[1].click();
    }
}

module.exports = new BusinessInfoPage();