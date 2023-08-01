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

The RetroPi project was born out of my passion for retro Nintendo games, and thus to preserve and relive the nostalgic gaming experiences of the past. These old games were a large part of my childhood, so developing an elegant and cool way to play them proved to be a fun and perplexing project.

Retro gaming enthusiasts often face the challenge of collecting and maintaining a variety of vintage consoles and cartridges, which can be both costly and space-consuming. RetroPi serves as an all-in-one gaming console that consolidates multiple Nintendo platforms into a single device. It provides a convenient and streamlined solution for enjoying games from various eras.

As an advocate of "free and open source software," I was interested in running the project on open source software (Linux OS) and open source hardware (Raspberry Pi); both of which proved to be lightwieght and thus perfect for deploying this project. I also documented the project and its components online, so that anyone could create this for themselves, or develop something inspired by my work.

This project has been a tremendous learning experience, providing valuable insights into many different realms of technology. Through its development I've gained experience in designing larger-scale software applications, learned new tech stacks, delved into the depths of Raspberry Pi hardware, and had my first foray into 3D printing. RetroPi allowed me to explore my passion for the world of retro gaming and technology.

<hr>

## Software



<hr>

## Hardware

<hr>
