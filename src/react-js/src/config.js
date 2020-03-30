export default {
    style: 'mapbox://styles/ruralinno/cjxytxnul151q1cq6u96niqs2',
    accessToken: 'pk.eyJ1IjoicnVyYWxpbm5vIiwiYSI6ImNqeHl0cW0xODBlMm0zY2x0dXltYzRuazUifQ.zZBovoCHzLIW0wCZveEKzA',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    title: 'CORI basemap test',
    subtitle: 'I can haz CORI storymap from mapbox template?',
    byline: '',
    footer: 'Source: the infallible Chen Chen.',
    chapters: [
        {
            id: 'glacier-np',
            title: 'There are so many places to look on a map...',
            // image: '',
            description: '... and yet one place always draws me back, no matter how hard I try...',
            location: {
                center: [-113.91666, 48.66451],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slide-2',
            title: '... Tiffin, OH',
            // image: '',
            description: 'We are a great town. Especially for mapping demos!',
            location: {
                center: [-83.17734, 41.10888],
                zoom: 13.99,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'water',
                    opacity: 0
                },
                {
                    layer: 'Child Care',
                    opacity: 0,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'water slide (get it?)',
            title: 'Tiffin haz wahtah',
            // image: '',
            description: 'And right through downtown, to boot!',
            location: {
                center: [-83.17734, 41.10888],
                zoom: 13.99,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'water',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'water',
                    opacity: 0.5
                },
            ]
        },
        {
            id: 'jesus-slide',
            title: 'Tiffin has the Lord',
            // image: '',
            description: 'The Holy Trinity!',
            location: {
                center: [-83.17489, 41.11629],
                zoom: 18.33,
                pitch: 57.00,
                bearing: 26.40
            },
            onChapterEnter: [
                {
                    layer: 'Child Care',
                    opacity: 0
                }
            ],
            onChapterExit: [
            
            ]
        },
        {
            id: 'child-care-slide',
            title: '... and childcare nearby.',
            // image: '',
            description: 'The socio-religious trifecta!',
            location: {
                center: [-83.17472, 41.11595],
                zoom: 19.52,
                pitch: 60.00,
                bearing: 149.60
            },
            onChapterEnter: [
                {
                    layer: 'Child Care',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Child Care',
                    opacity: 0
                }
            ]
        },
    ]
};
