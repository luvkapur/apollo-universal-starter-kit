import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, Row, Col, Card, CardGroup, CardTitle, CardText, PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="Profile"
    meta={[
      {
        name: 'description',
        content: 'Profile page'
      }
    ]}
  />
);

const ProfileView = ({ loading, currentUser }) => {
  if (loading && !currentUser) {
    return (
      <PageLayout>
        {renderMetaData()}
        <div className="text-center">Loading...</div>
      </PageLayout>
    );
  } else if (currentUser) {
    return (
      <PageLayout>
        {renderMetaData()}
        <Container>
          <Row>
            <Col xs={{ size: 6, offset: 3 }}>
              <Row>
                <Col>
                  <h1 className="text-center">Profile</h1>
                  <Card>
                    <CardGroup>
                      <CardTitle>User Name:</CardTitle>
                      <CardText>{currentUser.username}</CardText>
                    </CardGroup>
                    <CardGroup>
                      <CardTitle>Email:</CardTitle>
                      <CardText>{currentUser.email}</CardText>
                    </CardGroup>
                    <CardGroup>
                      <CardTitle>Role:</CardTitle>
                      <CardText>{currentUser.role}</CardText>
                    </CardGroup>
                    {currentUser.profile &&
                      currentUser.profile.fullName && (
                        <CardGroup>
                          <CardTitle>Full Name:</CardTitle>
                          <CardText>{currentUser.profile.fullName}</CardText>
                        </CardGroup>
                      )}
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        {renderMetaData()}
        <h2>No current user logged in</h2>
      </PageLayout>
    );
  }
};

ProfileView.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.object
};

export default ProfileView;