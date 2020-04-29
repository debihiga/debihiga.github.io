import { Route, Switch } from 'react-router-dom';

import Error from './Error';
import React from 'react';
import Sample from './Sample';
import UnderConstruction from './UnderConstruction';

/** https://www.smartwebsolutions.org/replace-space-with-hyphen/ */
export const pages = [
  {
    name: "Reverse Engineering: Huawei SmartAX MT882",
    path: "/reverse-engineering-huawei-smartax-mt882",
    component: UnderConstruction
  },
  {
    name: "JPEG: A picture with fewer words is worth the same",
    path: "/jpeg-a-picture-with-fewer-words-is-worth-the-same",
    component: UnderConstruction
  },
  {
    name: "Autostereogram: A picture that is worth more than itself",
    path: "/autostereogram-a-picture-that-is-worth-more-than-itself",
    component: UnderConstruction
  },
  {
    name: "MQTT Baselines",
    path: "/mqtt-baselines",
    component: UnderConstruction
  },
  {
    name: "BeagleBone Black Troubleshooting",
    path: "/beaglebone-black-troubleshooting",
    component: UnderConstruction
  },
  {
    name: "University Projects",
    path: "/university-projects",
    component: UnderConstruction
  },
  {
    name: "Android Apps",
    path: "/android-apps",
    component: UnderConstruction
  },
  {
    name: "Git Cheatsheet",
    path: "/git-cheatsheet",
    component: UnderConstruction
  },
];
