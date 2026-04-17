import csv

# Collecting user input
dog_name = input("What is your dog's name? ")
dog_breed = input("What breed is your dog? ")

while True:
    dog_age_human = input("How old is your dog (in human years)? ")
    
    if not dog_age_human.isdigit():
        print('Please enter a valid integer')
    else:
        break
    
  # Converting human age to dog years
dog_age_dog_years = int(dog_age_human) * 7

    # Determining the price based on dog size
while True:
    dog_size = input("What size is your dog? (small, medium, large): ")
    if dog_size.lower() == "small":
        price = 30
        print()
        print('=' * 44)
        print(f"These are the avaliable services for {dog_name}")
        print()
        print(f"Basic Grooming: We will wash, dry, and brush {dog_name}")
        print()
        print(f"Barber Shop: We will wash, dry, and brush {dog_name} in addition to a haircut!")
        print()
        print(f"Spa Day: This package includes all the features of the Barber Shop package with some treats and pampering!")
        print()
        print(f"Deluxe Package: {dog_name} will be treated to the full contents of Spa Day in addition to an ear cleaning, and a massage!")
        print()
        print(f"Which service would you like to purchase for {dog_name}?")
        print()
        print('=' * 44)
        while True:
            service = input("-> ")
            if service.lower() == "basic grooming":
                price += 10
                break
            elif service.lower() == "barber shop":
                price += 15
                break
            elif service.lower() == "spa day":
                price += 20
                break
            elif service.lower() == "deluxe package":
                price += 25
                break
            else:
                print("Sorry, our system doesn't recognise this service, please re-enter a valid service from the list above.")
            
        break
    elif dog_size.lower() == "medium":
        price = 35
        print()
        print('=' * 44)
        print(f"These are the avaliable services for {dog_name}")
        print()
        print(f"Basic Grooming: We will wash, dry, and brush {dog_name}")
        print()
        print(f"Barber Shop: We will wash, dry, and brush {dog_name} in addition to a haircut!")
        print()
        print(f"Spa Day: This package includes all the features of the Barber Shop package with some treats and pampering!")
        print()
        print(f"Deluxe Package: {dog_name} will be treated to the full contents of Spa Day in addition to an ear cleaning, and a massage!")
        print()
        print(f"Which service would you like to purchase for {dog_name}?")
        print()
        print('=' * 44)
        while True:
            service = input("-> ")
            if service.lower() == "basic grooming":
                price += 10
                break
            elif service.lower() == "barber shop":
                price += 15
                break
            elif service.lower() == "spa day":
                price += 20
                break
            elif service.lower() == "deluxe package":
                price += 25
                break
            else:
                print("Sorry, our system doesn't recognise this service, please re-enter a valid service from the list above.")
        break
    elif dog_size.lower() == "large":
        price = 40
        print()
        print('=' * 44)
        print(f"These are the avaliable services for {dog_name}")
        print()
        print(f"Basic Grooming: We will wash, dry, and brush {dog_name}")
        print()
        print(f"Barber Shop: We will wash, dry, and brush {dog_name} in addition to a haircut!")
        print()
        print(f"Spa Day: This package includes all the features of the Barber Shop package with some treats and pampering!")
        print()
        print(f"Deluxe Package: {dog_name} will be treated to the full contents of Spa Day in addition to an ear cleaning, and a massage!")
        print()
        print(f"Which service would you like to purchase for {dog_name}?")
        print()
        print('=' * 44)
        while True:
            service = input("-> ")
            if service.lower() == "basic grooming":
                price += 10
                break
            elif service.lower() == "barber shop":
                price += 15
                break
            elif service.lower() == "spa day":
                price += 20
                break
            elif service.lower() == "deluxe package":
                price += 25
                break
            else:
                print("Sorry, our system doesn't recognise this service, please re-enter a valid service from the list above.")
        break
    else:
        print("Invalid size, please retry. Our sizes are 'small' 'medium' and 'large'.")
    
    
# Displaying the booking summary
bookingReciept = f"""\n🐾 Booking Form 🐾")
Dog's Name: {dog_name.capitalize()}
Dog Age: (Human Years): {dog_age_human}
Dog Age: (Dog Years): {dog_age_dog_years}
Breed: {dog_breed}
Dog Size: {dog_size.lower()}
Price: ${price}"""

print(bookingReciept)

csvString = f"{dog_name.capitalize()},{dog_age_human},{dog_age_dog_years},{dog_breed},{dog_size.lower()},{price}\n"

with open("petBooking.csv", "a") as file:
    file.write(csvString)
    
print("We have recieved your booking.")
