import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.username);
        this.props.getUserRepos(this.props.match.params.username);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    }

    render() {
        const {name, avatar_url, location, company, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = this.props.user;
        const {loading, repos} = this.props;
        if(loading) return <Spinner />
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />) }
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{width:'150px'}}/>
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                        {bio && (<Fragment><h3>Bio</h3><p>{bio}</p></Fragment>)}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profil</a>
                        <ul>
                            <li>
                                {login && (<Fragment><b>Username: </b>{login}</Fragment>)}
                            </li>
                            <li>
                                {blog && (<Fragment><b>Company: </b>{company}</Fragment>)}
                            </li>
                            <li>
                                {blog && (<Fragment><b>Website: </b>{blog}</Fragment>)}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-ligth">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
    }
}

export default User
