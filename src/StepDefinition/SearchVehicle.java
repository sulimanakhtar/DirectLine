package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchVehicle {
	WebDriver driver;
	String baseUrl;
	
	@Given("^I am At home screen$")
	public void i_am_At_home_screen() {
		baseUrl = "https://covercheck.vwfsinsuranceportal.co.uk/";
		System.setProperty("webdriver.chrome.driver", "Resources/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(baseUrl);
	}

	@When("^I enter vehicle registration$")
	public void i_enter_vehicle_registration() {
		WebElement vehicleReg = driver.findElement(By.id("vehicleReg"));
		vehicleReg.sendKeys("Ov12UYY");
	}

	@When("^Click on find vehicle button$")
	public void click_on_find_vehicle_button(){
		WebElement findVehicle = driver.findElement(By.id("search"));
		findVehicle.click();
	}

	@Then("^I can see the results$")
	public void i_can_see_the_results() throws InterruptedException{
		WebElement cover = driver.findElement(By.xpath("//*[@id=\"page-container\"]/div[4]"));
		if (cover.getText().contains("Sorry record not found") == true) {

			System.out.println(cover.getText());
		} else {

			System.out.println(cover.getText());
		}
		Thread.sleep(3000);
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}


}
