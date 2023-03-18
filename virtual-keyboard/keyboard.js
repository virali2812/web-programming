const NROWS = 3
const keyLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
]

class Key {
  constructor(callback, keycode) {
    this.callback = callback;
    this.keycode = keycode;
    this.key = document.createElement('div');
    this.key.textContent = keycode;
    this.key.setAttribute('id', keycode);

    Object.assign(this.key.style, {
      fontFamily: 'sans-serif',
      fontSize: '15px',
      border: 'black 1px',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      minHeight: '40px',
      minWidth: '50px',
      paddingTop: '23px',
      borderRadius: '10px',
      cursor: 'pointer'
    })

    if (keycode === "Enter" || keycode === "Backspace") {
      Object.assign(this.key.style, {
        minWidth: '77px',
        justifyContent: 'left'
      })
    }

    this.key.addEventListener('click', () => {
      alert('Pressed Key : \'' + keycode + '\'');
    });
  }
}

class Row {
  constructor(callback) {
    this.row = document.createElement('div');
    Object.assign(this.row.style, {
       display: 'flex',
       justifyContent: 'center',
       flexDirection: 'row',
       gap: '4px'
     })
  }

  appendChild(child) {
    this.row.appendChild(child);
  }
}

class Keyboard {
  constructor(callback) {
    this.callback = callback
    this.keyboard = document.createElement('div')
    Object.assign(this.keyboard.style, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '330px',
      gap: '4px',
      height: '100%'
    })

    for (let i = 0; i < NROWS; i++) {
      let row = new Row(this.callback)

      let ncols = (i == 0) ? 10 : 9;
      for (let j = 0; j < ncols; j++) {
        let key = new Key(this.callback, keyLayout[i][j]);
        row.appendChild(key.key)
      }
      this.keyboard.appendChild(row.row)
    }
  }
}

export { Keyboard }
