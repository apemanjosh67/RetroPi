# RetroPi — all-in-one retro games console

<hr>

## What is it?

RetroPi is a custom mini gaming console designed to play classic Nintendo games. Nintendo Entertainment System (1983), Super Nintendo Entertainment System (1990), Nintendo 64 (1996), GameCube (2001), Wii (2006); with the RetroPi, you can experience three decades of nostalgia with the click of a button. Users can add virtually any game to their library, so long as they have the respective ROM file. RetroPi will handle the emulation software, providing the user with a seamless gaming experience.

<hr>

## How was it made?

RetroPi is both a software and hardware project. Together, these parts form a single-purpose computer that serves as a game console.

ElectronJS
- The backbone of RetroPi's design philosophy is "plug and play"; for the device to be simple, convienient, and intuitive to use. ElectronJS provides a framework for an intutive and modern UI / UX, making the device minimalistic and easy to use.

Python
- Python is the foundation of the device's software. There are classes for both Emulators (consoles) and Games that read information from JSON files, bundled with a script that coherently executes a chosen game with its respective emulator. When the user clicks on a game, the Electron app calls the Python script and passes the respective game information as arguments.

FCEUX
- The chosen emulator to run NES games. Click <a href="https://fceux.com/web/home.html">here</a> to learn more.

Snes9x
- The chosen emulator to run SNES games. Click <a href="https://www.snes9x.com/">here</a> to learn more.

Simple64
- The chosen emulator to run N64 games. Click <a href="https://simple64.github.io/">here</a> to learn more.

Dolphin Emulator
- The chosen emulator to run GameCube and Wii games. Click <a href="https://dolphin-emu.org/">here</a> to learn more.

Raspberry Pi
- A series of cheap, open source, single-board computers with many use cases. Whether for robotics, or an IoT device, (or really anything one can think of), Raspberry Pi can be used to solve virtually any problem. They are small, low-power machines that typically run a Linux operating system.
- RetroPi is run on a Raspberry Pi 3 Model B, which contains a 1.2 GHz quadcore CPU and 1 GB of RAM, along with 4 USB ports. The device was optimized with the addition of swap memory, overclocking of the processor, and fast SSD storage; all to provide the perfect gaming experience.

3D-printed Famicom case
- The board is encased in a miniature 3D-printed model of the Famicom games console—the Japanese equivalent of the American NES. The case allows for easy access to the power button and the USB ports, for plugging in controllers and loading new games.

USB-compatible NES, SNES, N64, GameCube, & Wii controllers
- The project includes <a href="https://en.wikipedia.org/wiki/NES_Classic_Edition">NES Classic</a> and <a href="https://en.wikipedia.org/wiki/Super_NES_Classic_Edition">SNES Classic</a> controllers, an original Nintendo 64 controller, GameCube controller, and Wii controller, all with USB adapters. Using the original Nintendo-made controllers allows for an authentic retro gaming experience.

<hr>

## Why was it made?

<hr>

## Software

<hr>

## Hardware

<hr>
