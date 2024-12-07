/**
 * @title: Generating Markup from List
 */

const link = [
    { name: 'Facebook', url: 'https://facebook.com'},
    { name: 'Youtube', url: 'https://youtube.com'},
    { name: 'Instagram', url: 'https://instagram.com'},
    { name: 'Linkedin', url: 'https://linkedin.com'},
    { name: 'Twitter', url: 'https://twitter.com'},
]

let template = `<ul>{{links}}</ul>`;
const linkList = link.reduce((acc, cur) => {
    acc += `<li><a href="${cur.url}">${cur.name}</a></li>`
    return acc;
}, '')

template = template.replace('{{links}}', linkList);

console.log(template);