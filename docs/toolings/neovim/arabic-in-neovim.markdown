---
author:
- Fatima Zohra Mezerreg
date: 14th April 2024
title: How to use Neovim Arabic in Windows
---

# Introduction

####  

#### 

#### 

#### 

# Install and configure Neovim on windows

## Installation

To install Neovim on Windows, there are two different methods.

### Using WSL

If you are familiar with Linux, you can install Neovim in a Linux
distribution via WSL. To do this:

-   Ensure that WSL is enabled and functioning on your windows system.

-   Excute the following command to install Neovim:

    ``` {.bash language="bash" backgroundcolor="\\color{codebackground}"}
    sudo apt-get install neovim
    ```

-   Verify that Neovim is successfully installed by running:

    ``` {.bash language="bash" backgroundcolor="\\color{codebackground}"}
    nvim -help 
    ```

### Using the Windows version of Neovim

-   The simplest way to install Neovim is by visiting the official
    website and downloading the Neovim `’.msi’` file.

-   Double-click the downloaded file to initiate the installation
    process.

-   Follow the on-screen instructions to complete the installation. This
    process will only take a few minutes.

-   Once the installation is complete, verify that Neovim is functioning
    properly by performing one of the following:

    -   Open Neovim from the shortcut icon on your desktop, if
        available.

    -   Navigate to the folder where Neovim is installed and open
        `‘nvim-qt.exe‘` located in the `‘bin‘` folder.

-   This will open a terminal window displaying the Vim editor
    interface, confirming that Neovim is installed and operational on
    your Windows system.

Congratulations!! you have successfully installed Neovim on your Windows
system.

## Configuration

After installing Neovim, you can customize its behavior in two ways:
either by configuring the initial settings such as line numbering and
indentation, or by adding plugins to enhance its appearance and
functionality.

All of these configurations are stored in the `init.vim` file. Here's
where you can locate this file in both WSL and Windows:

### For WSL:

You'll find the `init.vim` file in the `/̃.config/nvim` directory. If it
doesn't exist, you can create it by following these steps:

1.  Open a terminal.

2.  Run the following commands:

                mkdir -p ~/.config/nvim
                touch ~/.config/nvim/init.vim

3.  Then, open the `init.vim` file in Neovim to make your configuration
    changes by running:

                nvim ~/.config/nvim/init.vim

### For Windows:

You can find the `init.vim` file in the
`’Users\Your User Name\AppData\Local\nvim’` directory. Similarly, if it
doesn't exist, you can create it manually.

Once you have the `init.vim` file open in Neovim, you can start
customizing your editor's settings and adding plugins to tailor it to
your preferences.

####  

# Using arabic in Neovim

It's widely known that programming and displaying Arabic text correctly
can be challenging. This is due to its unique features, such as
right-to-left directionality and the complex shaping of letters, which
vary depending on their position within a word. Consequently, typing
Arabic often presents significant difficulties, particularly in code
editors or terminals editors like Vim. However, Vim has made notable
advancements in supporting Arabic text, which we'll explore next.

## Enable arabic setting

The first step you need to take to use Arabic in Neovim is to enable the
appropriate character encoding by typing: `:set encoding=utf-8`.

Then, To enable Arabic support in Neovim, you have three methods:

1.  **First method**:

    To start typing in Arabic with all its characteristics, simply enter
    the \"`:set arabic`\" command. This command triggers several
    changes:

    -   It sets the appropriate keymap for Arabic input.

    -   It enables the deletion of single combined pair characters.

    -   It activates right-to-left (RTL) mode.

    -   It enables RTL command mode.

    -   It enables Arabic shaping mode, allowing visual character
        alterations.

    You can disable Arabic support by using the \"`:set noarabic`\"
    command, which resets all settings related to Arabic, including the
    keymap, direction, and shape.

2.  **Second method**:

    Alternatively, you can enable Arabic settings using a combination of
    commands:

    -   "`:set keymap=arabic`" activates the Arabic keymap. You can
        toggle between Arabic and English keymaps using 'Ctrl-\^'. The
        Neovim terminal displays the current mapping as "insert arabic"
        for Arabic and "insert" for Latin.

    -   \"`:set rl`\" or \"`:set rightleft`\" changes the direction to
        RTL.

    -   \"`:set arabicshape`\" activates the necessary visual character
        alterations required for Arabic language support, including
        shaping, composing, and combining.

3.  **Third method**:

    You can simply enable arabic setting in nvim by just opening your
    file in arabic mode using this command:
    \"`nvim -R your-arabic-filename`\"

## Setting the Arabic fonts

You can set any Arabic font you prefer when writing in Neovim by typing:


    :set guifont=your_ARABIC_FONT


For example, if you wish to use Amiri with a size of 11, enter the
following command:


    :set guifont=Amiri:h11


However, this command may not work if you are using nvim-qt. In this
case, use the following command to resolve the issue:


    :Guifont! Amiri:h11


Before utilizing any font, ensure that it is successfully installed on
your Windows system.

#### You can save all these settings in your `init.vim` file if you want Neovim to always open with these configurations.

# My Observations on Arabic in Windows Terminals

When I initially used Neovim on Windows, I opened it in the Windows
Command Prompt. The outcome was disappointing as it displayed question
mark characters instead of Arabic letters. Subsequently, I installed
other terminals to identify the optimal one for Arabic writing.

I have observed various behaviors of Arabic text rendering in different
terminals on Windows. Below is a summary of my findings:

| Terminal   | Observations                                                                                                                      |
|------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Hyper      | - Arabic displays well with default monospace fonts like Menlo, "DejaVu Sans Mono", Consolas, and "Lucida Console", as well as with the Arabic monospace font Kwakab Mono. - Some Arabic fonts like Amiri and Cairo introduce spacing issues. - Lacks bidirectional support (English words may appear reversed). - Configuration is straightforward: open the configuration file using 'CTRL- ,' ![Hyper](images/hyper.png) |
| Cmder      | - Arabic appears perfectly in the terminal itself, but when using nvim, it displays question marks instead of Arabic letters. Even when Arabic letters are displayed, the shape may be distorted, resembling cmd and PowerShell behavior. - Changing the font to Courier and setting the font charset to Arabic improves Arabic display significantly. - Configuration is simple: right-click on the title bar at the top of the Cmder window, select "Settings" from the context menu. ![Cmder](images/Cmdercourier.png) ![Cmder](images/cmdernvim.png) |
| Cmd & PowerShell | - Only a few fonts display Arabic characters in cmd: Courier, which is the best option, Simplified Arabic Fixed, though some letters may appear as rectangular symbols, and Kawkab Mono. - Configuration is straightforward, with limited options available. - Only monospace fonts are supported. - Bidirectional support is lacking. ![Cmd & PowerShell](images/cmdcourier.png) |
| Neovim QT  | - Arabic characters display well with monospace fonts, particularly with Courier, showcasing a good shape. - However, when using Arabic fonts, there are noticeable spaces between letters. Among the Arabic fonts tested, only Kwakab Mono, a monospace font, renders perfectly. - Bidirectional text support is lacking. - Configuration is straightforward, primarily relying on commands for customization. ![Neovim QT](images/nvimqt.png) ![Neovim QT](images/droidkufi.png) |
| mlterm     | - Arabic characters are rendered elegantly with monospace fonts, notably with Kawkab Mono and Droid Arabic Kufi. - One standout feature of mlterm is its bidirectional text support, allowing seamless integration of English text within Arabic text without any word inversions, unlike other terminals. - Configuration is easy and intuitive. Accessing the configuration menu is as simple as typing 'CTRL' and clicking the right button of the mouse. ![mlterm](images/mlterm.png) |

*Table 1: Summary of Observations on Arabic in Windows Terminals*



In summary, after examining how different terminals handle Arabic text,
we found that Neovim QT and mlterm have their strengths and weaknesses.
Neovim QT displays Arabic text decently with certain fonts but struggles
with spacing and lacks bidirectional support. On the other hand, mlterm
excels in rendering Arabic text accurately, especially with monospace
fonts, and it supports bidirectional text well. Overall, mlterm seems to
be the better choice for users looking for reliable Arabic text support
and easy configuration.

# Conclusion

In conclusion, Neovim can support Arabic language for document writing,
but the user experience may vary depending on the terminal used. Users
seeking reliable Arabic text support may find mlterm to be a better
choice due to its accurate rendering and bidirectional text support.
However, advancements in technology may lead to improvements in Arabic
text handling across terminals in the future.
