import os
import time
from collections import deque

house_choice = input("Which house do you want to clean? (1 to 15): ")
house = f"house{house_choice}" if house_choice.isdigit() else house_choice

grid = []
roomba_y, roomba_x = 0, 0

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def load_grid():
    try:
        with open(f"{house}.txt", "r") as h:
            return [list(line.rstrip("\n")) for line in h]
    except FileNotFoundError:
        print(f"Error: {house}.txt not found!")
        exit(1)

def find_roomba():
    global roomba_y, roomba_x
    for y, row in enumerate(grid):
        for x, cell in enumerate(row):
            if cell == "@":
                roomba_y, roomba_x = y, x
                return
    print("Error: No '@' found in map!")
    exit(1)

def find_path_to_dirt():
    queue = deque()
    queue.append((roomba_y, roomba_x, []))
    visited = set()
    visited.add((roomba_y, roomba_x))

    directions = [
        (-1, 0, "up"),
        (1, 0, "down"),
        (0, -1, "left"),
        (0, 1, "right")
    ]

    while queue:
        y, x, path = queue.popleft()

        if grid[y][x] == ".":
            return path

        for dy, dx, move in directions:
            ny, nx = y + dy, x + dx

            if (0 <= ny < len(grid) and
                0 <= nx < len(grid[0]) and
                (ny, nx) not in visited and
                grid[ny][nx] != "#"):

                visited.add((ny, nx))
                queue.append((ny, nx, path + [(ny, nx)]))

    return None


def step_to(target_y, target_x):
    global roomba_y, roomba_x

    grid[roomba_y][roomba_x] = " "


    roomba_y, roomba_x = target_y, target_x


    grid[roomba_y][roomba_x] = "@"


def main():
    global grid
    grid = load_grid()
    find_roomba()

    while True:
        clear_screen()

        for row in grid:
            print("".join(row))

        if not any("." in row for row in grid):
            print("\nAll rooms cleaned! 🎉")
            break

        path = find_path_to_dirt()

        if path is None:
            print("\nNo reachable dirtyness left! 😵")
            break

        next_y, next_x = path[0]
        step_to(next_y, next_x)

        time.sleep(0.1)
main()