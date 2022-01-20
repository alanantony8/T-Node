import React from 'react';
import ReactDOM from 'react-dom';
import InputIP from './InputIP';
import OutputOP from './OutputOP';


//This fuction uses state
function MyTable() {
  return (<table>
    <thead>
      <tr>
        <th>Operation</th>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Insert</td>
        <td><InputIP name={'insert'}/></td>
        <td><OutputOP id={'insertid'}/></td>
      </tr>
      <tr>
        <td>Update</td>
        <td><InputIP name={'update'}/></td>
        <td><OutputOP id={'updateid'}/></td>
      </tr>
      <tr>
        <td>Delete</td>
        <td><InputIP name={'delete'}/></td>
        <td><OutputOP id={'deleteid'}/></td>
      </tr>
      <tr>
        <td>Read</td>
        <td><InputIP name={'read'}/></td>
        <td><OutputOP id={'readid'}/></td>
      </tr>
    </tbody>
  </table>);
}



ReactDOM.render(<MyTable />, document.getElementById('root'));