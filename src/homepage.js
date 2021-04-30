    export default function homePage(){
    let container = document.getElementById("content");
    let background = document.createElement('div');
    background.id = "background";
    container.appendChild(background);
    let titleContainer = document.createElement('div');
    titleContainer.id = "titleContainer";
    container.appendChild(titleContainer);
    let title = document.createElement('div');
    title.id = "title";
    titleContainer.appendChild(title);
    title.textContent = "Sushi Hiro";
    let tabs = document.createElement('div');
    tabs.id = "tabs";
    container.appendChild(tabs);
    let homeTab = document.createElement('div');
    homeTab.id = "homeTab";
    homeTab.className = "tabs";
    homeTab.textContent = "Home";
    tabs.appendChild(homeTab);
    let menuTab = document.createElement('div');
    menuTab.id = "menuTab";
    menuTab.className = "tabs";
    menuTab.textContent = "Menu";
    tabs.appendChild(menuTab);
    let contactsTab = document.createElement('div');
    contactsTab.id = "contactsTab";
    contactsTab.className = "tabs";
    contactsTab.textContent = "Contact Us";
    tabs.appendChild(contactsTab);
    let tabContent = document.createElement('div');
    tabContent.id = "tabContent";
    tabContent.style.backgroundColor = "rgb(255, 241, 241)"
    container.appendChild(tabContent);
    let homeTabContent = document.createElement('div');
        homeTabContent.id = "homeTabContent";
        homeTabContent.class = "tabContent"
        tabContent.appendChild(homeTabContent);
        let aboutUs = document.createElement('div');
        aboutUs.textContent = "About Us";
        homeTabContent.appendChild(aboutUs);
        let aboutUsText = document.createElement('div');
        aboutUsText.textContent = "Imagine that there was a body of text here"
        homeTabContent.appendChild(aboutUsText)
    
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function homeTabClick(){
    homeTab.addEventListener('click', () => {
        removeAllChildNodes(tabContent);
        homeTab.className = "tabs"
        homeTab.style.backgroundColor = "rgb(255, 241, 241)";
        homeTab.style.borderColor = "grey";
        menuTab.style.backgroundColor="white";
        menuTab.style.borderColor = "rgb(177, 175, 175)";
        contactsTab.style.borderColor = "rgb(177, 175, 175)"
        contactsTab.style.backgroundColor = "white"
        let homeTabContent = document.createElement('div');
        homeTabContent.id = "homeTabContent";
        homeTabContent.class = "tabContent"
        tabContent.appendChild(homeTabContent);
        let aboutUs = document.createElement('div');
        aboutUs.textContent = "About Us";
        homeTabContent.appendChild(aboutUs);
        let aboutUsText = document.createElement('div');
        aboutUsText.textContent = "Imagine that there was a body of text here"
        homeTabContent.appendChild(aboutUsText)
    })
    
}



export function menuTabClick(){
    menuTab.addEventListener('click', () => {
        removeAllChildNodes(tabContent);
        menuTab.className = "tabs"
        menuTab.style.backgroundColor = "rgb(255, 241, 241)"
        menuTab.style.borderColor = "grey"
        homeTab.style.backgroundColor="white";
        contactsTab.style.backgroundColor = "white"
        homeTab.style.borderColor = "rgb(177, 175, 175)";
        contactsTab.style.borderColor = "rgb(177, 175, 175)"
        let menuTabContent = document.createElement('div');
        menuTabContent.id = "menuTabContent";
        menuTabContent.class = "tabContent"
        tabContent.appendChild(menuTabContent);

        class MenuItem {
            constructor(itemNumber, item, ingredients){
                this.item = item;
                this.ingredients = ingredients;
                this.itemNumber = itemNumber
                ingredients = [];
                
            }
            logItem(){
                console.log(this.item + " Ingredients: " + this.ingredients);
            }
            printItem(){
                this.ingredients = this.ingredients.join(', ')
                let newMenuItem = document.createElement('div');
                newMenuItem.class = "menuItems"
                console.log(newMenuItem.textContent);
                menuTabContent.appendChild(newMenuItem);
                let itemName = document.createElement('div');
                itemName.id = this.item;
                itemName.class = "itemNames";
                itemName.textContent = this.itemNumber + '. ' + this.item;
                newMenuItem.appendChild(itemName);
                let itemIngredients = document.createElement('div');
                itemIngredients.class = "itemIngredients";
                itemIngredients.textContent = this.ingredients;
                itemName.appendChild(itemIngredients);
        
            }
        }
        
        let item1 = new MenuItem(1,'California Roll', ['Avocado', 'Rice', 'Cucumber', 'Crab Stick', 'Mayonnaise']);        
        let item2 = new MenuItem(2, "Dragon Roll", ["Sushi Rice", "Avocado", "Cucumber", "Eel", "Crab Stick", "Sesame Seeds", "Nori", "Wasabi"]);
        let item3 = new MenuItem(3,"Many More Items", ["Use your Imagination"])
        let itemArray = [item1, item2, item3];
        itemArray.forEach(element =>{
            element.printItem();
        })
    })
}


export function contactsTabClick(){
    contactsTab.addEventListener('click', () => {
        removeAllChildNodes(tabContent);
        contactsTab.className = "tabs"
        contactsTab.style.backgroundColor = "rgb(255, 241, 241)"
        contactsTab.style.borderColor = "grey"
        homeTab.style.backgroundColor="white";
        menuTab.style.backgroundColor = "white"
        menuTab.style.borderColor = "rgb(177, 175, 175)";
        homeTab.style.borderColor = "rgb(177, 175, 175)"
        let contactsTabContent = document.createElement('div');
        contactsTabContent.id = "contactsTabContent";
        contactsTabContent.class = "tabContent"
        tabContent.appendChild(contactsTabContent);
        let contactUs = document.createElement('div');
        contactUs.textContent = "Contact Us";
        contactsTabContent.appendChild(contactUs);
        let contactEmail = document.createElement('div');
        contactEmail.textContent = "E-mail: sushihiro@fakeemail.com"
        contactsTabContent.appendChild(contactEmail);
        let contactPhone = document.createElement('div');
        contactPhone.textContent = ("Phone Number: (555) 555-5555");
        contactsTabContent.appendChild(contactPhone);
        let contactAddress = document.createElement('div');
        contactAddress.textContent = "270 E Bay St, Lakeland FL, 33803"
    contactsTabContent.appendChild(contactAddress);
    })
}