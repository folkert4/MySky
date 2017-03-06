# MySky
## Weather where I care

### V1.1:
1. Changed to correctly use Bootstrap's offset columns instead of empty col's
2. Added information to the future days (seemed lacking in info)
3. Moved the datetime and made it more clear on its purpose
4. various QOL changes

### V1.0:
#### ...VICE CITY STYLE...
1. Icon directives are working
2. rough styling is done. site in daily use by me
3. credit to darksky is correctly being displayed
4. Identified a pesky bug that made text transformations blur briefly in webkit browsers; http://stackoverflow.com/questions/37856596/text-is-blurred-when-has-transform-translate-and-it-is-adjacent-to-another-elem
  1. Known issue with hardware acceleration and can't be fixed if you use the 'transform' css property *shakes fist angrily*

### V0.90:
1. Basic functions for data extraction and formatting done
2. All data points needed are pulled
3. Finished with major app architecture in place
4. most data points are displayed
* ready for styling!
* ready to add icon directives!
* ready to deploy barebones to web(if I don't get lazy (I will get lazy))

### V0.10:
1. added files from [deanbot's api wrapper](https://github.com/deanbot/angular-dark-sky)
  1. integrated into existing NG
  2. testing of api & wrapper
2. cried when none of this worked
3. made it work somehow (ish)
* Holland, MI lat/long for testing; 42.825429 -86.0872327
* sample get request; https://api.darksky.net/forecast/c637$apikey/42.8254,-86.0872?units=uk2&lang=en&exclude=alerts,daily,flags,hourly,minutelyundefined&callback=angular.callbacks._0


### V0.01:
1. Removed template references
2. Started putting things where they need to go
3. Fixed nav and added correct names
4. Removed uneeded css components
5. Added framework for AMP page
6. shhhh remember to update the readme

_____
#### Special thanks to:
* [darksky.net](https://darksky.net)
* [deanbot's excellent darksky api wrapper](https://github.com/deanbot/angular-dark-sky) (used under MIT license)
* [Erik FLowers' icons (used in api wrapper)](http://erikflowers.github.io/weather-icons/) (used under MIT license)