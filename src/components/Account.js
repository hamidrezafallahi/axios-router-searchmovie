import React, { Component } from 'react'
import '../styles/mystyle.scss'

class Account extends Component {
    render() {
        return (
            <div className='account'>
                <div className='tables'>
                    <table border='1'>
                        <th>REGISTER
                            <tr>
                                <td>name</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password"/></td>
                            </tr>
                            <tr>
                                <td>gender</td>
                                <td>
                                    <label htmlFor="male">male :   </label><input type="radio" name="gender" value="male"/>
                                    <label htmlFor="male">Female : </label><input type="radio" name="gender" value="female"/>
                                </td>

                            </tr>
                            <button type="submit">REGISTER</button>
                        </th>
                    </table>
                    <table border='1'>
                        <th>LOGIN
                            <tr>
                                <td>username</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type="text"/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password"/></td>
                            </tr>
                            <tr>
                                <td>remember-login</td>
                                <td>
                                    <label htmlFor="male">always :   </label><input type="radio" name="gender" value="male"/>
                                    <label htmlFor="male">just now : </label><input type="radio" name="gender" value="female"/>
                                </td>

                            </tr>
                            <button type="submit">LOGIN</button>
                        </th>
                    </table>
                </div>
            </div>
        )
    }
}
export default Account;