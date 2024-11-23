import { CloseOutlined, FileDownloadOutlined, FileUploadOutlined } from '@mui/icons-material'
import arrow_icon from '../assets/arrow_icon.svg'
import credit_icon from '../assets/credit_icon.png'
import download_icon from '../assets/download_icon.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import google_plus_icon from '../assets/google_plus_icon.svg'
import header_img from '../assets/header_img.png'
import image_w_bg from '../assets/image_w_bg.png'
import image_wo_bg from '../assets/image_wo_bg.png'
import profile_img_1 from '../assets/profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png'
import remove_bg_icon from '../assets/remove_bg_icon.svg'
import twitter_icon from '../assets/twitter_icon.svg'
import upload_btn_icon from '../assets/upload_btn_icon.svg'
import upload_icon from '../assets/upload_icon.svg'
import logo from '/logo.svg'
import logo_icon from '/logo_icon.svg'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
        author: "Richard Nelson",
        image: profile_img_1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle:'UI Deginer'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]


  export const steps = [
    {
        id: 1,
        title:'Upload image',
        text: "Upload your image to proceed with removing the background",
        iconName: FileUploadOutlined,
    },
    {
        id: 2,
        title:'Remove background',
        text: "Remove the background to proceed with downloading the image.",
        iconName: CloseOutlined,
    },
    {
        id: 3,
        title:'Download image',
        text: "Download your image to complete the process",
        iconName: FileDownloadOutlined,
    },
 
];