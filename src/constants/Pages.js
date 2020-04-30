import Sample from '../pages/Sample';
import UnderConstruction from '../pages/UnderConstruction';

/** 
 * https://medium.com/gammastack/making-a-nested-sidebar-menu-in-react-f8595031995e
 * https://www.smartwebsolutions.org/replace-space-with-hyphen/ */
 export const pages = [
  {
    name: "Reverse Engineering: Huawei SmartAX MT882",
    url: "/reverse-engineering-huawei-smartax-mt882",
    component: UnderConstruction,
    children: [
      {
        name: "Device analysis",
        url: "/reverse-engineering-huawei-smartax-mt882/device-analysis",
        component: UnderConstruction,
      },
      {
        name: "Electronic board analysis",
        url: "/reverse-engineering-huawei-smartax-mt882/electronic-board-analysis",
        component: UnderConstruction,
      },
      {
        name: "Firmware analysis",
        url: "/reverse-engineering-huawei-smartax-mt882/firmware-analysis",
        component: UnderConstruction,
      },
      {
        name: "Bug hunting",
        path: "/reverse-engineering-huawei-smartax-mt882/bug-hunting",
        component: UnderConstruction,
      }
    ]
  },
  {
    name: "JPEG: A picture with fewer words is worth the same",
    url: "/jpeg-a-picture-with-fewer-words-is-worth-the-same",
    component: UnderConstruction
  },
  {
    name: "Autostereogram: A picture that is worth more than itself",
    url: "/autostereogram-a-picture-that-is-worth-more-than-itself",
    component: UnderConstruction
  },
  {
    name: "MQTT Baselines",
    url: "/mqtt-baselines",
    component: UnderConstruction
  },
  {
    name: "BeagleBone Black Troubleshooting",
    url: "/beaglebone-black-troubleshooting",
    component: UnderConstruction
  },
  {
    name: "University Projects",
    url: "/university-projects",
    component: UnderConstruction
  },
  {
    name: "Android Apps",
    url: "/android-apps",
    component: UnderConstruction
  },
  {
    name: "Git Cheatsheet",
    url: "/git-cheatsheet",
    component: UnderConstruction
  },
  {
    name: "Sample",
    url: "/sample",
    component: Sample
  },
];