/**
 * @title: Contact List by Group
 */

const contacts = [
    { name: 'Cedric', phone: '1-935-690-0134', email: 'condimentum.Donec.at@enim.ca' },
    { name: 'Alice', phone: '1-214-874-3295', email: 'lacus.Vestibulum@curabitur.net' },
    { name: 'John', phone: '1-303-579-7281', email: 'felis.Nunc@gravida.org' },
    { name: 'Diana', phone: '1-415-847-5729', email: 'risus@faucibusvelit.com' },
    { name: 'Mason', phone: '1-567-235-9832', email: 'vitae.Morbi@nequamlacinia.com' },
    { name: 'Lily', phone: '1-908-234-7735', email: 'in@velit.org' },
    { name: 'Ethan', phone: '1-623-457-8910', email: 'porttitor@libero.edu' },
    { name: 'Grace', phone: '1-765-348-1065', email: 'magna@enimdolor.com' },
    { name: 'Sophia', phone: '1-202-832-1098', email: 'elementum.lorem@euismod.edu' },
    { name: 'Leo', phone: '1-909-481-7324', email: 'tellus@adipiscingat.com' },
    { name: 'Chloe', phone: '1-415-990-1227', email: 'etiam@dui.com' },
    { name: 'Benjamin', phone: '1-617-935-0024', email: 'a@turpismauris.com' },
    { name: 'Olivia', phone: '1-507-473-2951', email: 'vulputate@necsollicitudin.com' },
    { name: 'Jack', phone: '1-818-560-7119', email: 'mauris@nullamvolutpaterat.com' },
    { name: 'Nina', phone: '1-707-554-2117', email: 'tristique@vulputate.org' },
    { name: 'Matthew', phone: '1-415-562-9292', email: 'dui@quamlobortis.com' },
    { name: 'Zara', phone: '1-808-227-8365', email: 'egestas.varius@fringilla.net' },
    { name: 'Max', phone: '1-213-869-3011', email: 'nec@velitcursus.com' },
    { name: 'Harper', phone: '1-310-547-5814', email: 'lacinia@orci.org' },
    { name: 'Aiden', phone: '1-972-308-6794', email: 'felis@nequamlacinia.com' },
    { name: 'Eva', phone: '1-925-400-2048', email: 'sed@enimipsum.com' },
    { name: 'Maya', phone: '1-847-233-0967', email: 'at@nullampharetra.org' },
    { name: 'Samuel', phone: '1-612-428-5392', email: 'nulla@euismodmollis.edu' },
    { name: 'Olivia', phone: '1-760-349-8160', email: 'mattis@posuerefelis.com' },
    { name: 'David', phone: '1-404-625-9031', email: 'eu@nullamrisus.com' },
    { name: 'Sophia', phone: '1-773-437-2307', email: 'tellus@scelerisque.com' },
    { name: 'Charlotte', phone: '1-909-821-6271', email: 'elit@integerlacus.com' },
    { name: 'Lucas', phone: '1-415-635-7609', email: 'eget@nonummyacris.com' },
    { name: 'Zoe', phone: '1-626-220-4348', email: 'scelerisque@lacuslectus.com' },
    { name: 'Jake', phone: '1-310-533-9030', email: 'lectus@felisinterdum.com' },
    { name: 'Ella', phone: '1-646-321-5938', email: 'sodales@faucibus.com' },
    { name: 'Henry', phone: '1-410-210-1113', email: 'pretium@magnaegestas.com' }
  ];
  

  contacts.sort((a, b) => {
    if(a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
  })

//   console.log(contacts);

const group = contacts.reduce((acc, cur) => {
    let groupName = cur.name.charAt(0).toUpperCase()
    if(acc[groupName]) {
        acc[groupName].push(cur)
    } else {
        acc[groupName] = [cur]
    }

    return acc;
}, {})

// console.log(group);

const displayList = group => {
    console.log(`Displaying Contact Information`)
    console.log('------------------------------')

    const keys = Object.keys(group);
    keys.forEach(key => {
        console.log(`Group: ${key}`)
        console.table(group[key])
    })
}

displayList(group);