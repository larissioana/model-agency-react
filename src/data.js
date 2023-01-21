import model from './images/models13.jpg';
import modelSmall from './images/models13-small.jpg';
import model1 from './images/models26.jpg';
import model1Small from './images/models26-small.jpg';
import model2 from './images/models24.jpg';
import model2Small from './images/models24-small.jpg';
import model3 from './images/models25.jpg';
import model3Small from './images/models25-small.jpg';
import model4 from './images/models27.jpg';
import model4Small from './images/models27-small.jpg';
import model5 from './images/model2.jpeg';
import model5Small from './images/model2-small.jpg';
import model6 from './images/models8.jpg';
import model6Small from './images/models8-small.jpg';
import model7 from './images/models6.jpg';
import model7Small from './images/models6-small.jpg';
import events from './images/event.jpg';
import events1 from './images/event1.jpg';
import events2 from './images/event2.jpg';
import events3 from './images/event16.jpg';
import events4 from './images/event4.jpg';
import events5 from './images/event5.jpg';
import events6 from './images/event18.jpg';
import events7 from './images/event17.jpg';
import events8 from './images/event8.jpg';
import events9 from './images/event9.jpg';
import events10 from './images/event10.jpg';
import events11 from './images/event14.jpg';
import events11Small from './images/event14-small.jpg';
import events12 from './images/event12.jpg';
import events13 from './images/event13.jpg';

//social Links
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa';

export const social=[
    {
        id:1,
        url:"https://www.instagram.com",
        icon:<FaInstagramSquare/>,
    },
    {
        id:2,
        url:'https://www.facebook.com',
        icon:<FaFacebookSquare/>,

    },
    {
        id:3,
        url:'https://www.youtube.com',
        icon:<FaYoutubeSquare/>,
    }
];
export const links=[
    {
        id:4,
        url:'/',
        text:'home',
    },
    {
        id:5,
        url:'/about-us',
        text:'about us'
    },
    {
        id:6,
        url:'/gallery',
        text:'gallery',
    },
    {
        id:7,
        url:'/our-models',
        text:'our models',

    },
    {
        id:8,
        url:'/events',
        text:'events',

    },
    {
        id:9,
        url:'/contact',
        text:'contact'
    }
];
const modelsInfo=[
{
    id:1,
    name:'Eva',
    city:'London',
    age:23,
    image:modelSmall,
    coverImg:model,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:2,
    name:'Bryana',
    city:'New York',
    age:25,
    image:model1Small,
    coverImg:model1,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:3,
    name:'Samantah',
    city:'Berlin',
    age:20,
    image:model2Small,
    coverImg:model2,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:4,
    name:'Anna',
    city:'Singapore',
    age:23,
    image:model3Small,
    coverImg:model3,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:5,
    name:'Evelyn',
    city:'Vienna',
    age:26,
    image:model4Small,
    coverImg:model4,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:6,
    name:'Eva',
    city:'London',
    age:23,
    image:model5Small,
    coverImg:model5,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:7,
    name:'Yasemin',
    city:'Las Vegas',
    age:20,
    image:model6Small,
    coverImg:model6,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto.",
},
{
    id:8,
    name:'Jasmine',
    city:'London',
    age:23,
    image:model7Small,
    coverImg:model7,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit.",
},
{
id:9,
name:'Yo La',
city:'Beijing',
age:23,
image:events11Small,
coverImg:events11,
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi, facilis perferendis cumque sed aperiam tenetur iste iusto molestiae velit.",
},
];

export default modelsInfo;


export const modelsEvent=[events,events1,events2,events3,events4,events5,
    events6,events7,events8,events9
];

export const modelEvent=[
 {
    id:1,
    image:events10,
 },
 {
    id:2,
    image:events11,

},
{
    id:3,
    image:events12,
},
{
    id:4,
    image:events13,
},

]