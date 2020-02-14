// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(day, degree) {
    const head = document.createElement('div'),
          date = document.createElement('span'),
          lamb = document.createElement('h1'),
          temp = document.createElement('span');

    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = day;
    lamb.textContent = 'Lambda Times';
    temp.textContent = degree;

    head.append(date);
    head.append(lamb);
    head.append(temp);

    return head
}

const headCont = document.querySelector('.header-container');

headCont.append(Header('SMARCH 28, 2019', '98°'))
