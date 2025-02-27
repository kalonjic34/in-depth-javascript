const library = [
    {
        title: 'The Road Ahead',
        author: 'Pamela Samson',
        status: {
            own: true,
            reading: true,
            read: false,
        },
    },
    {
        title: 'Steve Jobs',
        author: 'Owen Jackson',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Alice Wilson',
        status: {
            own: true,
            reading: false,
            read: true,
        },
    },
];

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(library)
console.log(libraryJSON);