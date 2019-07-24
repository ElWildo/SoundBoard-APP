# SoundBoard-APP
The app is a simple template to create any soundboard app through React Native with Expo.

## Instructions
1. Make sure you have all the sounds you want to put in your sound board
1. Clone the git repository in a folder
1. Run npm install in the folder to install all the dependencies
1. Copy your sound files into assets/sounds
1. Edit soundList.js:
    1. Go to the soundList array of objects.
    1. Each object in the array represents a botton which will play the sound in the app
    1. Create an object in the array for each sound. "name" is the text will be displayed on the app, "link" will be the link to the file. The link variable needs to be in this format: `require("_sound_relative_path_")`     
    1.Save the file
1. Test the app throgh the Expo-cli (_optional_)
1. Build the app through the Expo-cli (_optional_)

On a side note: if you know how to do it, you can edit the Stylsheet object or images in the Assets to costumize the app.
