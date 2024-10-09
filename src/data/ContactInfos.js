import MapIcon from '@mui/icons-material/Map';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
export const ContactInfos = [
    {
        id: 1,
        icon: MapIcon,
        rows:[
            {
                title: 'Country',
                info: 'Bangladesh'
            },
            {
                title: 'City',
                info: 'Dhaka'
            },
            {
                title: 'Street',
                info: '35 Vhatara, Badda'
            }
        ]
    },
    {
        id: 2,
        icon: MailIcon,
        rows:[
            {
                title: 'Email',
                info: 'youremail@gmail.com'
            },
            {
                title: 'Skype',
                info: '@yourusername'
            },
            {
                title: 'Telegram',
                info: '@yourusername'
            }
        ]
    },
    {
        id: 3,
        icon: SmartphoneIcon,
        rows:[
            {
                title: 'Support Services',
                info: '15369'
            },
            {
                title: 'Office',
                info: '+58 (021) 356 587 235'
            },
            {
                title: 'Personal',
                info: '+58 (021)356 587 235'
            }
        ]
    }
]