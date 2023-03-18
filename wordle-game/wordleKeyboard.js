const NROWS = 3
const keyLayout = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
]

class Key {
    constructor(keycode) {
      this.keycode = keycode;
      this.key = document.createElement('div');
      this.key.textContent = keycode;
      this.key.setAttribute('id', keycode);
  
      Object.assign(this.key.style, {
        fontFamily: 'sans-serif',
        fontSize: '15px',
        color: 'white',
        border: 'white solid 2px',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#121213',
        minHeight: '30px',
        minWidth: '40px',
        paddingTop: '17px',
        borderRadius: '10px',
        cursor: 'pointer'
      })
  
      if (keycode === "Enter" || keycode === "Backspace") {
        Object.assign(this.key.style, {
          minWidth: '77px',
          justifyContent: 'left'
        })
      }
  
    }
  }
  
  class Row {
    constructor() {
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

export class Keyboard {
    constructor() {
        this.keyboard = document.createElement('div')
        // this.rows = {}
        Object.assign(this.keyboard.style, {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '50px',
          gap: '4px',
          height: '100%'
        })
    
        for (let i = 0; i < NROWS; i++) {
          let row = new Row()
    
          let ncols = (i == 0) ? 10 : 9;
          for (let j = 0; j < ncols; j++) {
            let key = new Key(keyLayout[i][j]);
            row.appendChild(key.key)
          }
          this.keyboard.appendChild(row.row)
        }
    }

    changeKeyColor(ch, color){
        if(document.getElementById(ch).style.backgroundColor != '#AA646A'){
            document.getElementById(ch).style.backgroundColor = color
        }
    }
}
