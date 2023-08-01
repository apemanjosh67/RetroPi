# RetroPi — all-in-one retro games console

<hr>

## What is it?

RetroPi is a custom mini gaming console designed to play classic Nintendo games. Nintendo Entertainment System (1983), Super Nintendo Entertainment System (1990), Nintendo 64 (1996), GameCube (2001), Wii (2006); with the RetroPi, you can experience three decades of nostalgia with the click of a button. Users can add virtually any game to their library, so long as they have the respective ROM file. RetroPi will handle the emulation software, providing the user with a seamless gaming experience.

<p float="left">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fo67an6kf3ic51.jpg&f=1&nofb=1&ipt=5fea59b030b4d131fe7371a6d9af412e71c1e3fe6661c44b98c6ec10a34a91b7&ipo=images" height="180px" alt="Nintendo 64 playing Mario 64"/>
  <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-5PrLj8c2ghg%2FUbZ6WCXxItI%2FAAAAAAAACvw%2F5OAQwyNaMPw%2Fs1600%2FNES-Console-Set.png&f=1&nofb=1&ipt=586db90e52cd8728529c01ab606ae91d8b9e89cc0a66460f72268bea5b823687&ipo=images" height="180px" alt="NES"/>
  <img src="http://www.ivghof.info/wp-content/uploads/2016/06/zelda1.jpg" height="180px" alt="The Legend of Zelda: A Link to the Past"/>
</p>

<hr>

## How was it made?

RetroPi is both a software and hardware project. Together, these parts form a single-purpose computer that serves as a game console.

ElectronJS <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LEBQgXD9y_jodxthkIBz1AHaFj%26pid%3DApi&f=1&ipt=e7fcf95525f944b71ee2e9ce2969cde31a317def1713dbacf3682e48cf52c39b&ipo=images" height="20px"/>
- The backbone of RetroPi's design philosophy is "plug and play"; for the device to be simple, convienient, and intuitive to use. ElectronJS provides a framework for an intutive and modern UI / UX, making the device minimalistic and easy to use.

Python <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe0%2Fbc%2F9d%2Fe0bc9ddc19834caa1dbe69d5653fe261.png&f=1&nofb=1&ipt=98d17d6352f663db5b6540d9459f63522d550e803a8aa9cced89f1ba136a5b2c&ipo=images" height="20px"/>
- Python is the foundation of the device's software. There are classes for both Emulators (consoles) and Games that read information from JSON files, bundled with a script that coherently executes a chosen game with its respective emulator. When the user clicks on a game, the Electron app calls the Python script and passes the respective game information as arguments.

FCEUX <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farchive.org%2Fdownload%2Ffceux-2.5.0%2Ffceux.png&f=1&nofb=1&ipt=cf992814b5623b08aad0517e4510ae4060157a8487992d8309eef81bba1a85ad&ipo=images" height="20px"/>
- The chosen emulator to run NES games. Click <a href="https://fceux.com/web/home.html">here</a> to learn more.

Snes9x <img src="https://lh5.googleusercontent.com/proxy/E8bjOu4jJYCTLHlJtekoeqCztXv2bh2CIjV9r8I60LOa5_zTKpsRJxbdPQstJqUuLSNT=w1200-h630-p-k-no-nu" height="20px"/>
- The chosen emulator to run SNES games. Click <a href="https://www.snes9x.com/">here</a> to learn more.

Simple64 <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdl.flathub.org%2Frepo%2Fappstream%2Fx86_64%2Ficons%2F128x128%2Fio.github.simple64.simple64.png&f=1&nofb=1&ipt=63b8c773faf838cbce4f59088e89bc6d5c4b34de16806e6c95d99c0e5a65ba3f&ipo=images" height="20px"/>
- The chosen emulator to run N64 games. Click <a href="https://simple64.github.io/">here</a> to learn more.

Dolphin Emulator <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.nintendolife.com%2Fnews%2F2016%2F09%2Fthe_dolphin_emulator_can_finally_play_the_entire_gamecube_library%2Fattachment%2F0%2Foriginal.jpg&f=1&nofb=1&ipt=b282be2b9d81857c6f9e0abb1dfc9b0d4dd81032d395926df6a47d18ccc2f9b2&ipo=images" height="20px"/>
- The chosen emulator to run GameCube and Wii games. Click <a href="https://dolphin-emu.org/">here</a> to learn more.

Raspberry Pi <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2018%2F02%2Fraspberry-pi-logo-1.png&f=1&nofb=1&ipt=0524bce3d0acd8e6e2f32f18eb0f76e324819e827bed375e5e67ec9db6aa03d7&ipo=images" height="20px"/>
- A series of cheap, open source, single-board computers with many use cases. Whether for robotics, or an IoT device, (or really anything one can think of), Raspberry Pi can be used to solve virtually any problem. They are small, low-power machines that typically run a Linux operating system.
- RetroPi is run on a Raspberry Pi 3 Model B, which contains a 1.2 GHz quadcore CPU and 1 GB of RAM, along with 4 USB ports. The device was optimized with the addition of swap memory, overclocking of the processor, and fast SSD storage; all to provide the perfect gaming experience.

3D-printed Famicom case <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyoshicast.com%2Fwp-content%2Fuploads%2F2016%2F02%2FNintendo-Famicom-Console-FR-1024x1024.jpg&f=1&nofb=1&ipt=6356a84adb71ac376327715f8f2f535d3e94c694be7cd3f6991f4871a3bcdb9b&ipo=images" height="20px"/>
- The board is encased in a miniature 3D-printed model of the Famicom games console—the Japanese equivalent of the American NES. The case allows for easy access to the power button and the USB ports, for plugging in controllers and loading new games.

USB-compatible NES, SNES, N64, GameCube, & Wii controllers <img src="" height="20px"/>
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
