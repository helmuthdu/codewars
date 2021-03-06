import { sudoku } from '../kata';

describe('Sudoku', function() {
  const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  it('Puzzle 1', function() {
    expect(JSON.stringify(sudoku(puzzle))).toEqual(
      JSON.stringify(solution),
      'Incorrect solution for the following puzzle: ' + JSON.stringify(puzzle),
    );
  });

  const sp = [
    [
      '605720039400005100020100004090030706100809005204050080800003020002900001350067408',
      '615724839487395162923186574598432716136879245274651983849513627762948351351267498',
    ],
    [
      '008030540300407900410008002043502060500000008060309410100800027005603004029070800',
      '978231546352467981416958372843512769591746238267389415134895627785623194629174853',
    ],
    [
      '600108203020040090803005400504607009030000050700803102001700906080030020302904005',
      '645198273127346598893275461514627389238419657769853142451782936986531724372964815',
    ],
    [
      '019060540000000000820974036001503800000000000002701600750138092000000000083040710',
      '319862547467315289825974136671593824538426971942781653756138492194257368283649715',
    ],
    [
      '046000000902060008008400250000800070500702003010006000064003900300080102000000730',
      '146258397952367418738491256623849571589712643417536829264173985375984162891625734',
    ],
    [
      '006020050002000194000100207607082019085070030000605400090013040001009000730008900',
      '416927853372856194859134267647382519985471632123695478598213746261749385734568921',
    ],
  ];

  for (let i = sp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = sp[i];
    sp[i] = sp[j];
    sp[j] = temp;
  }

  function str2twod(str) {
    const inner = [];
    let outer = [];
    for (let i = 0; i < 9; i++) {
      outer = [];
      for (let j = 0; j < 9; j++) outer.push(parseInt(str[i * 9 + j]));
      inner.push(outer);
    }
    return inner;
  }

  function twod2str(arr) {
    const temp = [];
    for (let z in arr) {
      for (let y in arr[z]) temp.push(arr[z][y].toString());
    }
    return temp.join('');
  }
  for (let i in sp) {
    it('Puzzle ' + (parseInt(i) + 2), function() {
      expect(twod2str(sudoku(str2twod(sp[i][0])))).toEqual(sp[i][1]);
    });
  }
});
