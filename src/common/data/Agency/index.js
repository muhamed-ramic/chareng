import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';
import { home } from 'react-icons-kit/fa/home';
import { pencil } from 'react-icons-kit/fa/pencil';
import { calculator } from 'react-icons-kit/fa/calculator';
import { laptop } from 'react-icons-kit/iconic/laptop';
import { spreadsheet } from 'react-icons-kit/iconic/spreadsheet';
import Image1 from 'common/assets/image/agency/projekt1/2021-12-09_220050.jpg';
import Image2 from 'common/assets/image/agency/projekt1/2021-12-09_220207.jpg';
import Image3 from 'common/assets/image/agency/projekt1/2021-12-09_220426.jpg';
import Image4 from 'common/assets/image/agency/projekt1/2021-12-09_220446.jpg';
import Image5 from 'common/assets/image/agency/projekt2/2021-12-09_224931.jpg';
import Image6 from 'common/assets/image/agency/projekt2/2021-12-09_225025.jpg';
import Image7 from 'common/assets/image/agency/projekt2/2021-12-09_225203.jpg';
import Image8 from 'common/assets/image/agency/projekt2/2021-12-09_225356.jpg';

import Image9 from 'common/assets/image/agency/projekt3/2021-12-09_223828.jpg';
import Image10 from 'common/assets/image/agency/projekt3/2021-12-09_223939.jpg';
import Image11 from 'common/assets/image/agency/projekt3/2021-12-09_224007.jpg';
import Image12 from 'common/assets/image/agency/projekt3/2021-12-09_230315.jpg';
import Image13 from 'common/assets/image/agency/projekt3/2021-12-09_230459.jpg';

import Image14 from 'common/assets/image/agency/projekt4/2021-12-09_215058.jpg';
import Image15 from 'common/assets/image/agency/projekt4/2021-12-09_215245.jpg';
import Image16 from 'common/assets/image/agency/projekt4/2021-12-09_215313.jpg';
import Image17 from 'common/assets/image/agency/projekt4/2021-12-09_215344.jpg';
import Image18 from 'common/assets/image/agency/projekt4/2021-12-09_215634.jpg';
import Image19 from 'common/assets/image/agency/projekt4/2021-12-09_215754.jpg';

import Image20 from 'common/assets/image/agency/projekt5/2021-12-09_220746.jpg';
import Image21 from 'common/assets/image/agency/projekt5/2021-12-09_221026.jpg';
import Image22 from 'common/assets/image/agency/projekt5/2021-12-09_221117.jpg';
import Image23 from 'common/assets/image/agency/projekt5/2021-12-09_221326.jpg';

import Image24 from 'common/assets/image/agency/projekt6/2021-12-09_224456.jpg';
import Image25 from 'common/assets/image/agency/projekt6/2021-12-09_224606.jpg';
import Image26 from 'common/assets/image/agency/projekt6/2021-12-09_224718.jpg';
import Image27 from 'common/assets/image/agency/projekt6/2021-12-09_224743.jpg';

import Image28 from 'common/assets/image/agency/projekt7/2021-12-09_222319.jpg';
import Image29 from 'common/assets/image/agency/projekt7/2021-12-09_222603.jpg';
import Image30 from 'common/assets/image/agency/projekt7/2021-12-09_222638.jpg';
import Image31 from 'common/assets/image/agency/projekt7/2021-12-09_222822.jpg';


const data = {
  menuItems: [
    {
      label: 'Home',
      path: '#bannerSection',
    },
    {
      label: 'Feature',
      path: '#featureSection',
    },
    {
      label: 'Work',
      path: '#videoSection',
    },
    // {
    //   label: 'Portfolio',
    //   path: '#blogSection',
    //   offset: '67',
    // },
    // {
    //   label: 'Team Member',
    //   path: '#teamSection',
    //   offset: '67',
    // },
    // {
    //   label: 'FAQ',
    //   path: '#faqSection',
    //   offset: '67',
    // },
  ],
  projects: {
    project1: {
      title: 'Project I',
      images: [{
        original: `${Image1?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image2?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image3?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image4?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    },
    project2: {
      title: 'Project II',
      images: [{
        original: `${Image5?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image6?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image7?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image8?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    },
    project3: {
      title: 'Project III',
      images: [{
        original: `${Image9?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image10?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image11?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image12?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      },
      {
        original: `${Image13?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    },
    project4: {
      title: 'Project IV',
      images: [{
        original: `${Image14?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image15?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image16?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image17?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      },
      {
        original: `${Image18?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      },
      {
        original: `${Image19?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    },
    project5: {
      title: 'Project V',
      images: [{
        original: `${Image20?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image21?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image22?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image23?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    },
    project6: {
      title: 'Project VI',
      images: [{
        original: `${Image24?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image25?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image26?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image27?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    },
    project7: {
      title: 'Project VII',
      images: [{
        original: `${Image28?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb one',
      },
      {
        original: `${Image29?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb two',
      },
      {
        original: `${Image30?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb three',
      },
      {
        original: `${Image31?.src}`,
        originalHeight: '200px',
        thumbnailAlt: 'thumb four',
      }]
    }
  },
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: home,
      title: 'Design of Steel Structure',
      description:
        '',
    },
    {
      id: 2,
      icon: pencil,
      title: 'Drafting',
      description:
        'Workshop (fabrication) drawing',
    },
    {
      id: 3,
      icon: laptop,
      title: 'Modeling in various softwares',
      description:
        'CAD / CAM softwares',
    },
    {
      id: 4,
      icon: calculator,
      title: 'Calculations',
      description:
        '',
    },
    {
      id: 5,
      icon: spreadsheet,
      title: 'Finite Element Method Analysis',
      description:
        'FEM, FEA',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-pencil-case',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Content Writting',
      description:
        'Proper Content Management is important to find out the real clients for your agencies .',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior Ui/UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'Jon Doe',
      designation: 'CEO of Denish Co.',
      comment:
        'Best working experience  with this amazing team & in future, we want to work together',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Jone Doe',
      designation: 'Director of Beauty-queen',
      comment:
        'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Roman Ul Oman',
      designation: 'Co-founder of QatarDiaries',
      comment:
        'Impressed with master class support of the team and really look forward for the future.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 2,
      title: 'Contact information',
      isEmailHref: true,
      menuItems: [
        {
          id: 2,
          url: 'emir.neziric@chargeng.ba',
          text: 'English and Bosnian: emir.neziric@chargeng.ba',
        },
        {
          id: 1,
          url: 'lejla.cardzic@chargeng.ba',
          text: 'English and Finnish: lejla.cardzic@chargeng.ba',
        },
      ],
    },
    {
      id: 2,
      isEmailHref: false,
      title: 'Site',
      menuItems: [
        {
          id: 3,
          url: '#bannerSection',
          text: 'Home',
        },
        {
          id: 4,
          url: '#featureSection',
          text: 'Feature',
        },
        {
          id: 5,
          url: '#videoSection',
          text: 'Work',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
