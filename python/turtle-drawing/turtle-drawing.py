import turtle
import random

# ---------------------------
# Setup
# ---------------------------
turtle.speed(0)
turtle.shape("turtle")
turtle.pensize(2)

# ---------------------------
# Helper Functions
# ---------------------------
def move(x, y, heading):
    turtle.penup()
    turtle.goto(x, y)
    turtle.setheading(heading)
    turtle.pendown()

def fence():
    turtle.pensize(2)
    turtle.fillcolor("saddlebrown")
    turtle.begin_fill()
    turtle.setheading(90)
    turtle.forward(80)
    turtle.setheading(0)
    turtle.forward(5)
    turtle.setheading(270)
    turtle.forward(80)
    turtle.end_fill()

def bird():
    for _ in range(8):
        move(random.randint(-200, 200), random.randint(150, 200), 45)
        for _ in range(30):
            turtle.forward(1)
            turtle.right(3)
        turtle.setheading(45)
        for _ in range(30):
            turtle.forward(1)
            turtle.right(3)

# ---------------------------
# Background Gradient
# ---------------------------
turtle.pensize(400)
move(0, 130, 270)
r, g, b = 135, 206, 250
for _ in range(50):
    turtle.pencolor(min(r,255), min(g,255), min(b,255))
    turtle.forward(5)
    r += 1
    g += 1
    b += 1
turtle.pensize(2)
turtle.pencolor("black")

# ---------------------------
# Walls
# ---------------------------
# Right wall
move(0, -50, 90)
turtle.fillcolor((236,184,125))
turtle.begin_fill()
turtle.forward(250)
turtle.setheading(12)
turtle.forward(220)
turtle.setheading(91)
turtle.forward(185)
turtle.setheading(175)
turtle.forward(218)
turtle.end_fill()

# Left wall
move(-218, -50, 195)
turtle.fillcolor((236,164,125))
turtle.begin_fill()
turtle.forward(123)
turtle.setheading(271)
turtle.forward(170)
turtle.setheading(-22)
turtle.forward(130)
turtle.setheading(271)
turtle.backward(250)
turtle.end_fill()

# ---------------------------
# Door
# ---------------------------
move(60, -100, 93)
turtle.fillcolor("brown")
turtle.begin_fill()
turtle.forward(100)
turtle.setheading(5)
turtle.forward(50)
turtle.setheading(273)
turtle.forward(92)
turtle.end_fill()

# Door handle
turtle.pensize(1)
turtle.backward(35)
turtle.setheading(188)
turtle.fillcolor("goldenrod")
turtle.begin_fill()
for _ in range(40):
    turtle.forward(1)
    turtle.right(5)
turtle.setheading(273)
turtle.forward(22)
turtle.end_fill()

# Circle at top of door
turtle.fillcolor("gold")
move(90, -20, 93)
turtle.begin_fill()
turtle.circle(10)
turtle.end_fill()

# ---------------------------
# Fence
# ---------------------------
move(-200, -50, 90)
for _ in range(7):
    fence()
turtle.backward(80)
move(173, -50, 90)
for _ in range(5):
    fence()

# ---------------------------
# Clouds
# ---------------------------
move(-150, 140, 180)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.backward(40)
turtle.forward(40)
for _ in range(50):
    turtle.forward(2)
    turtle.right(5)
turtle.setheading(45)
for _ in range(35):
    turtle.forward(1)
    turtle.right(4)
turtle.setheading(0)
for _ in range(40):
    turtle.forward(1)
    turtle.right(5)
turtle.end_fill()
bird()

# ---------------------------
# Pavement
# ---------------------------
turtle.pensize(2)
turtle.fillcolor("lightgrey")
move(-42, -120, 190)
turtle.begin_fill()
turtle.forward(170)
turtle.setheading(270)
turtle.forward(50)
turtle.setheading(0)
turtle.forward(230)
turtle.setheading(15)
turtle.forward(184)
turtle.setheading(90)
turtle.forward(85)
turtle.setheading(200)
turtle.forward(30)
turtle.end_fill()

move(0, -199, 0)
turtle.fillcolor("burlywood")
turtle.begin_fill()
turtle.forward(220)
turtle.setheading(90)
turtle.forward(50)
turtle.setheading(194)
turtle.forward(200)
turtle.end_fill()

# Lines on pavement
move(-42, -120, 340)
turtle.forward(160)
move(60, -100, 340)
turtle.forward(160)
move(160, -80, 340)
turtle.forward(50)
move(-160, -140, 340)
turtle.forward(170)
move(-180, -200, 15)
turtle.forward(400)

# ---------------------------
# Windows
# ---------------------------
# Left window on right wall
move(-30, 0, 4)
turtle.fillcolor((150,112,194))
turtle.begin_fill()
turtle.forward(60)
turtle.setheading(273)
turtle.forward(50)
turtle.setheading(187)
turtle.forward(60)
turtle.setheading(273)
turtle.backward(50)
turtle.end_fill()

# Inner part
move(-25, -5, 4)
turtle.fillcolor("lightsalmon")
turtle.begin_fill()
turtle.forward(50)
turtle.setheading(273)
turtle.forward(40)
turtle.setheading(187)
turtle.forward(50)
turtle.setheading(273)
turtle.backward(42)
turtle.setheading(4)
turtle.forward(50)
turtle.end_fill()

# ---------------------------
# Letters Z, A, C, H
# ---------------------------
# Z
turtle.pensize(3)
move(30, 70, 0)
turtle.forward(20)
turtle.setheading(250)
turtle.forward(45)
turtle.setheading(0)
turtle.forward(20)

# A
move(60, 30, 75)
turtle.forward(40)
turtle.setheading(-80)
turtle.forward(40)
turtle.backward(15)
turtle.setheading(0)
turtle.backward(8)

# C
move(100, 33, 180)
for _ in range(60):
    turtle.forward(1)
    turtle.right(3)

# H
move(110, 33, 93)
turtle.forward(40)
turtle.backward(20)
turtle.setheading(5)
turtle.forward(10)
turtle.setheading(93)
turtle.forward(20)
turtle.backward(40)

# ---------------------------
# Finish
# ---------------------------
turtle.done()
