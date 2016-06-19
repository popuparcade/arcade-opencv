# OpenCV Modules for Popup Arcade

These modules provide computer vision functionality that works with the raspberry pi + pi camera, such as face detection. Actually at this point, that's all we provide!

# Project Dependencies

## Pi Camera
To support a video feed, it requires that the pi camera module is connected and enabled. We are using the default `raspivid` command to control the camera.

## OpenCV
This module requires that OpenCV 2.4+ is installed on the pi. 

The `libopencv*` modules should be sufficient (ie `apt-cache search libopencv*`)

If there are issues with installing those modules, just install OpenCV here: http://www.pyimagesearch.com/2016/04/18/install-guide-raspberry-pi-3-raspbian-jessie-opencv-3/
