# WhiteCodel JSON to Dart Model Converter

![Intro GIF](intro.gif)

## Overview

The **WhiteCodel JSON to Dart Model Converter** is a Visual Studio Code extension that allows you to quickly convert a JSON structure into a Dart model. This extension simplifies the process of generating Dart models from JSON, helping you streamline your Flutter development workflow.

## Features

- **JSON to Dart Conversion:** Converts any JSON input into a Dart model string.
- **Null Safety Support:** Optional support for Dart's null safety feature.
- **Customization Options:** Offers several customization options, including:
  - Put Encoder/Decoder in Class
  - Make All Required
  - Make All Final
  - Generate `CopyWith` Method
  - Use `num` for Number
- **Nested JSON Handling:** Efficiently handles complex and nested JSON structures.
- **Single File Output:** Saves all generated classes in the same file for ease of use.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for "WhiteCodel JSON to Dart Model Converter".
4. Click **Install**.

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Type `WhiteCodel JSON to Dart` and select the command.
3. Enter or paste your JSON structure into the input box.
4. Customize your options as needed.
5. The extension will generate a Dart model based on your JSON and selected options.
6. The output will appear in the designated output area or file.

**Example JSON:**

```json
{
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}


