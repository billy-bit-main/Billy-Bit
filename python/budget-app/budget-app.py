def end(avail, need):
    if avail < 0.01 and need < 0.01:
        print("="*106)
        print("Sorry, you don't have enough money to purchase any more items. ):")
        print("Please consider seeking employment! :D")
        print("="*106)


#Checks how much money the user has an if they ca nafford the item
def get_budget_status(priority, cost, availableMoney, needAvailableMoney):
    if priority == "need":
        if needAvailableMoney < cost:
            return "needBroke"
        elif availableMoney < cost:
            return "needSavingless"
        else:    
            return "needChill"
    else: 
        if availableMoney < cost:
            return "broke"
        else:
            return "chill"

# gets how much money the user has
while True:
    try:# tries to make it a float
        while True:
            availableMoney = abs(float(input("How much money do you have? (Nearest cent): $"))) #gets the amount of money and abs makes negative numbers positive
            if availableMoney < 1000000: # checks if the user has input an unrealistic amount of money
                break
            print("Please enter a realistic amount of money.")

        break
    except ValueError: # if the user doesnt input an integer or float, it doesnt make an error and retries.
        print("Sorry, you must input a number.") # helpful

#makes needAvaliable money variable for needs vs wants functionality
needAvailableMoney = availableMoney

#gets how much money the user wants to save
while True:
    try: # try does it without breaking
        savingMoney = abs(float(input("How much money do you want in savings? $"))) #abs makes the negative numbers positive to avoid nerrors
        if savingMoney >= availableMoney: # checks if user has saved more than they have
            print("You won't have enough money to buy anything if you want to save that much, please lower your expectations.") #helpful
            continue
        
        # updates avaliable money for wants
        availableMoney -= savingMoney
        print(f"You have ${availableMoney:.2f} available for 'wants' and ${needAvailableMoney:.2f} for 'needs'.") #.2f makes it 2 decimal places
        break
    except ValueError:
        print("Invalid amount.")

# the sectionm that asks what item they need and logs it
while True:
    item = input("\nWhat item would you like to purchase? (or type 'quit') -> ") #/n makes new line
    if item.lower() == 'quit': #checks if they want to exit program and .lower makes it not case sensitive
        break #exits
    
    #checks if price will cost money and isnt negative 
    try:
        cost = float(input(f"How much does {item} cost? $"))
        if cost <= 0:
            print("Price must be more than $0!")
            continue
    except ValueError:
        print("Invalid price.")
        continue
#asks if its need or want cause need means they can cut into savings money
    while True:
        priority = input(f"Is {item} a need or a want? -> ").lower()
        if priority in ["need", "want"]: #checks if they picked one of the options
            status = get_budget_status(priority, cost, availableMoney, needAvailableMoney)
            break
        print("Please type 'need' or 'want'.") #fixes the mistake and corrects them

    # checks whether they can afford
    if status == "broke":
        print(f"You can't afford this {item} without dipping into savings!")
    elif status == "needBroke":
        print(f"Even with savings, you can't afford this {item}!")
        break
    elif status == "needSavingless":
        difference = cost - availableMoney
        print(f"You're using ${difference:.2f} of your savings for this need.") #tells them how much money they spent
        availableMoney = 0 
        needAvailableMoney -= cost #updates money
        print(f"Remaining savings: ${needAvailableMoney:.2f}")
        print("Purchase logged.")
        
    elif status in ("chill", "needChill"): #user has enough money
        print(f"Purchase approved!")
        availableMoney -= cost
        needAvailableMoney -= cost
        print(f"Remaining spending money: ${availableMoney:.2f}")


    # runs end function
    end(availableMoney, needAvailableMoney)
    if availableMoney < 0.01 and needAvailableMoney < 0.01:
        break #ends the program if they dont have enough money

