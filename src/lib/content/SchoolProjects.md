---
title: "Projects that I have done for school and can't give all of the details about because of plagarism but none the less want to write about because they are pretty cool"
date: "2024-12-10"
---

Recently, when writing my resume for the 15 billionth time, I decided I wanted to add a "projects I completed in college" section to demonstrate the things I am learning in school. It feels disingenuous to not mention them, so this is my attempt at writing about them in a way that will not promote plagiarism while still demonstrating my understanding of the concepts they build. Most of the projects I will write about will be purposefully vague in order to give only the most basic details about the assignment and code that go into them.

### ALU in VHDL - Digital System Design

This lab was completed for Digital System Design. The goal was to make a basic ALU which add, subtract, and preform all of the basic logical operations. The VHDL code ended up having three flags for overflow, zeros, and negative, to account for results that are not displayable on four bits. My solution ended up using with select when statements to switch to the proper operation based on input switches. I can't show any waveforms or code because of academic integrity but do know that it worked and I further optimized my code to reduce the number of lines. The project was run on a Basys 3 board and compiled using Vivado.

### Ripple Carry Adder - Digital System Design

For Digital System Design, I also built a ripple carry adder. This was built using half and full adders. I can't show my wired circuit, but I can show my schematic for it. The results show a generic RCA result table. This project was also replicated in VHDL on the Basys board, yielding similar results.

<img src="https://i.imgur.com/yGbBSUs.png" alt="ripple carry adder"/>

### Signal Transimission - Digital Signal Processing 

This was the final project for my Digital Signal Processing lab which involves breaking a string down into bits using bitwise functions, converting the bits into a frequency modulated signal, and then decoding said signal back into the original string using an entirely separate script. The basis of this project worked on making separate functions to do each step. I broke each part into even smaller systems and developed a decently efficient decoder for my own signals.

### IP Sorter - C Programming for Engineers

This was the final homework for my C programming class my sophomore year. The basic idea was to sort IP addresses based on locality and aliases, while removing those which are invalid or out of range. My method was to use two structures and split IP addresses and aliases into one, sort the aliases and IPs by name, and remove all of the invalid entries. I was given a text file containing a list of unsorted IP addresses and aliases, and outputted a similarly formatted file containing the result, and another containing any invalid entries.

### Specrtogram Analysis and Simulations - CT Signals and Systems

This was the first lab for my CT Signal Processing class (which used discrete time funnily enough). The purpose of this lab was to write a MATLAB script that could analyze a sound file and simulate, via a separate script, an approximation of the recorded signal. I ended up recording a chord I played on a keyboard with my phone, porting it into MATLAB, processing it, and displaying it as a spectrogram. This was a rather simple lab, but the point was to demonstrate a basic level of competence in displaying frequencies and frequency changes over time.

<img src="https://i.imgur.com/E5Mrr99.png" alt="tritone spectrogram" />

### Basic MIPS Processor in VHDL - Computer Organization

This was a comprehensive project for my computer organization class which involved creating parts of a MIPS processor and combining them to make a functioning processor. My implementation was a bit more advanced than necessary, implementing memory mapped I/O and basic branch prediction. The entire processor was run on the Basys 3 development board and written in Vivado.

<img src="https://i.imgur.com/ZC7ml1L.png" alt="mips processor block diagram" />

### Basic Bash Shell - Data Structures and Systems Programming

This was the final project for my half data structures and half systems programming course - specifically in the systems programming section. I found this project to be extremely fun and in great contrast to the data structures section of the course. The goal was to design a basic shell in C which could find and execute programs as an introduction to writing OS code for Unix systems (the following class is Operating Systems Programming). My shell was very simple, using strtok and execv to split a input command and fork the command to a subprocess.

### Joystick Controlled Two Axis Grid with OLED Display - Embedded Systems

For the final project of my embedded systems class, we were tasked to design <i>something</i> (yes it was that vague for us as well) which used the components in our lab kits and demonstrated the concepts from the semester. Of course, this project clearly takes inspiration from the other projects I have done – most notably the serial OLED project and PyDraw. The result was a bit lackluster as the components we had were rough and we had no budget at all. The parts are all reused and from the remains of past projects + some 3d prints to make it as easy to manufacture as possible. We didn’t end up winning, but I really put a lot of work in for this project and I am proud of the ridiculously large codebase I wrote for this. As obvious by the name and references, this was basically a drawing robot without the bearings or solenoid. It moved via commands/arguments and a joystick built into a controller. The position was displayed with a SSD_1306 OLED (not in our lab kits) and due to the mundanity of the project as a whole, we added a video player for the system (one utilizing OpenCV and the BeagleBone Black’s hardware) and played Bad Apple on it.

<img src="https://i.imgur.com/Udq4dsP.jpg" alt="final project as displayed for demo" />

### Hardware Sorting with FPro Core - FPGA Design in VHDL

This project was the final lab for my final and highest degree VHDL course. The goal was to generate a set of random numbers and sort them via a hardware core we designed and simultaneously sort them with a basic software insertion sort and compare the time it took to perform each - and the speedup gained from a dedicated hardware module on the chip. The results were expected, with the hardware sort being considerably faster. The learning experience from this assignment was designing hardware which would interact with the provided CPU and the code we wrote to run on both. This involved writing drivers and core modules in C++ which would then compile with Vitis and execute on the MMIO core.

### MOSFET Amplifier Design Project - Linear Electronics

This was one of two projects for my linear electronics course which entailed designing an amplifier using NMOS in order to satisfy a pretty strict set of criteria. This is one of those projects where explaining too much might be a problem, so I will pretty shortly say that it was a fun project which mostly revolved around cascading amplifiers and very weird results in Pspice.

### Lock, Semaphores, and Syscalls in OS161 - Operating Systems

This entry is not exactly one single project, but a compilation of projects I did in OS161. The projects for this operating systems class were aimed at giving the students the chance to implement locks, semaphores, etc. in order to solve small problems and games which were provided in the OS. The final project for this class was to implement Unix standard syscalls and all of the problems that brings with implementing them on a MIPS CPU. The first project went extremely well for my partner and I, but the second was not so fun. I really enjoyed this class, and it is my favorite computer science class I have attended while in university.

### Physics Controlled Ball Game on MSP430 - Microcontrollers

For my microcontrollers course, we were given several projects over the semester ranging from powering our MSP430 Launchpads with a solar cell and reading the voltages with the ADC, to making a working simon says game using timers and capture and compare registers. But overall, my favorite project was the final one, making a ball move based on a accelerometer. This sounds simple, but for this to work, we were tasked with first interfacing with the SPI TFT display, then interfacing, setting up, and both reading and writing to the I2C accelerometer, then finally designing the game logic to allow the ball to naturally move within the bounds of the screen. This project worked out well for me, once I got I2C working on the board. Most people take for granted what the libraries they use do, and the i2c_write library is very tedious and not tolerant of even the smallest errors. This lab was fun and I think the result really sums up the class as a whole.

<img src="https://i.imgur.com/v40628E.jpeg" alt="debug screen showing the ball bouncing along with the raw accelerometer values" />