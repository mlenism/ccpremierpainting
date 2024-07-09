import { NavContent } from "../models/interfaces/nav-content";
import { LOGO } from "./img-url";

export const NAVBAR_CONTENT: NavContent = {
    image: LOGO,
    imageLink: '',
    links: [
        {
            name: 'Home',
            url: '',
            sublinks: []
        },
        {
            name: 'Our Services',
            url: '',
            sublinks: [
                {
                    name: 'Interior Painting',
                    url: 'interior-painting'
                },
                {
                    name: 'Exterior Painting',
                    url: 'exterior-painting'
                },
                {
                    name: 'Commercial Painting',
                    url: 'commercial-painting'
                },
                {
                    name: 'Pressure Washing',
                    url: 'pressure-washing'
                },
                {
                    name: 'Drywall Services',
                    url: 'drywall-services'
                }
            ]
        },
        {
            name: 'Gallery',
            url: 'gallery',
            sublinks: []
        },
        {
            name: 'Service Area',
            url: 'service-area',
            sublinks: []
        },
        {
            name: 'Meet Our Team',
            url: '',
            sublinks: [
                {
                    name: 'About Us',
                    url: 'about-us'
                },
                {
                    name: 'Referrals',
                    url: 'referrals'
                }
            ]
        },
        {
            name: 'Reviews',
            url: 'reviews',
            sublinks: []
        },
        {
            name: 'Contact',
            url: 'contact',
            sublinks: []
        }
    ],
    modalInfo: {
        buttonTitle: 'Contact Us',
        buttonIcon: 'person_pin_circle',
        title: 'Contact Info',
        items: [
            {
                name: 'Phone: (774) 722-9433',
                href: 'tel:(774) 722-9433',
                icon: 'call'
            },
            {
                name: 'Secondary: (786) 678-9305',
                href: 'tel:(786) 678-9305',
                icon: 'call'
            },
            {
                name: 'Email: ccpremierpainting@gmail.com',
                href: 'mailto:ccpremierpainting@gmail.com',
                icon: 'mail'
            }
        ]
    }
}