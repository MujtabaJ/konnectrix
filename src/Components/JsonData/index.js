const JsonData = {
    data: [
        { image: require('../../Assets/download.jpg'), borderColor: 'red', id: 0 },
        { image: require('../../Assets/download.jpg'), borderColor: 'green', id: 1 },
        { image: require('../../Assets/download.jpg'), borderColor: 'blue', id: 2 },
        { image: require('../../Assets/download.jpg'), borderColor: 'white', id: 3 },
        { image: require('../../Assets/download.jpg'), borderColor: 'pink', id: 4 },
        { image: require('../../Assets/download.jpg'), borderColor: 'gray', id: 5 },
        { image: require('../../Assets/download.jpg'), borderColor: 'lemon', id: 5 },
        { image: require('../../Assets/download.jpg'), borderColor: 'sky', id: 6 },
        { image: require('../../Assets/download.jpg'), borderColor: 'skyblue', id: 7 },
        { image: require('../../Assets/download.jpg'), borderColor: 'white', id: 8 },
    ],
    networks: [
        {
            name: 'Memon Network',
            avatar: require('../../Assets/netwrokicon2.png'),
            image: require('../../Assets/image6.jpg')
        },
        {
            name: 'Syed Network',
            avatar: require('../../Assets/netwrokicon1.png'),
            image: require('../../Assets/image4.jpg')
        },
        {
            name: 'Khan Network',
            avatar: require('../../Assets/netwrokicon3.png'),
            image: require('../../Assets/image6.jpg')
        },
    ],
    posts: [
        {
            userId: "1",
            postId: "1",
            networkId: "1",
            postText: "A platform where you can buy apps as per your needs at a very economical price.we provide you the best.",
            postImage: require('../../Assets/image7.png'),
            userImage:require('../../Assets/image3.png'),
            userName:"Tashfeen",
            userTitle:"Software Developer",
            networkName:"Memon Network",
            time: "30 minutes ago",
            ikesCount: 20,
            isLiked: true,
            commentsCount: 1,
            commentsList: [
                {
                    userId: 2,
                    userName:"Tashfeen",
                    userAvatar:require('../../Assets/image4.jpg'),
                    comment: "Hello, there ??"
                }
            ]
        },
        {
            postId: "2",
            userId: "1",
            networkId: "1",
            postText: "",
            postImage: require('../../Assets/image9.png'),
            userImage:require('../../Assets/image3.png'),
            userName:"Hameer",
            userTitle:"Mobile Developer",
            networkName:"Reeco Job",
            time: "30 minutes ago",
            ikesCount: 20,
            isLiked: false,
            commentsCount: 1,
            commentsList: [
                {
                    userId: 2,
                    userName:"Hameer",
                    userAvatar:require('../../Assets/image4.jpg'),
                    comment: "Hello, there"
                }
            ]
        }

    ],
    buttonIcons: [
        {
            name: 'ios-heart-circle-outline',
            type: 'Ionicons'
        },
        {
            name: 'ios-chatbubbles',
            type: 'Ionicons'
        },
        {
            name: 'ios-send',
            type: 'Ionicons'
        },
    ],

    jobsList: [
        {
            avatar: require('../../Assets/download.jpg'),
            jobImage: require('../../Assets/image2.jpg'),
            jobTitle: 'LECTURER',
            jobCompanyName: 'KARACHI, SINDH, PAKISTAN',
            likes: '813',
            jobDescription: 'A platform where you can buy apps as per your needs at a very economical price.we provide you the best.',
            days: '1d ago',
            jobStatus: 'Apply'
            // video: require('../../Assets/sample.mp4')

        },
        {
            avatar: require('../../Assets/cococola.png'),
            jobImage: require('../../Assets/image2.jpg'),
            jobTitle: 'MANAGER',
            jobCompanyName: 'LAHORE, PUNJAB, PAKISTAN',
            likes: '813',
            jobDescription: 'A platform where you can buy apps as per your needs at a very economical price.we provide you the best.',
            days: '1d ago',
            jobStatus: 'Apply'
        },
        {
            avatar: require('../../Assets/luckycement.png'),
            jobImage: require('../../Assets/luckycement.png'),
            jobTitle: 'ELECTRICAL ENGINEER',
            jobCompanyName: 'KARACHI, SINDH, PAKISTAN',
            likes: '813',
            jobDescription: 'A platform where you can buy apps as per your needs at a very economical price.we provide you the best.',
            days: '1d ago',
            jobStatus: 'Apply'
        },
    ],
}
export default JsonData; 