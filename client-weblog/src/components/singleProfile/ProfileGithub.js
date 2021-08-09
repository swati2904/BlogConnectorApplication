import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className='card  border-0 my-1'>
      <div className='col-12 px-3 py-1 '>
        <div className='card px-1 bg-light py-2 my-2'>
          <div className='mx-2'>
            <h5 className='text-success '>Github Repos</h5>
            {repos.map((repo) => (
              <div key={repo.id} className='repo p-1 my-1 '>
                <div className='card border-0 bg-light d-flex justify-items-center'>
                  <div>
                    <a
                      className='text-decoration-none text-dark bold'
                      href={repo.html_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {repo.name}
                    </a>
                    <p className='text-secondary'>{repo.description} </p>
                  </div>

                  <div>
                    <ul>
                      <li className='badge bg-light text-success'>
                        Stars: {repo.stargazers_count}
                      </li>
                      <li className='badge bg-light text-success'>
                        Watchers: {repo.watchers_count}
                      </li>
                      <li className='badge bg-light text-success'>
                        Forks: {repo.forks_count}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
