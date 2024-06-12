import React, { useState } from 'react';
import './CombinedForm.css';
import { useNavigate } from 'react-router-dom';
import TextBox from './TextBox';

const CombinedForm = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [selectedBusinessModel, setSelectedBusinessModel] = useState('');
  const [skills, setSkills] = useState('');
  const [skillsList, setSkillsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleBusinessModelSelect = (model) => {
    setSelectedBusinessModel(model);
    setErrorMessage(''); // Clear any existing error messages
  };

  const handleAddSkill = () => {
    if (skills && !skillsList.includes(skills)) {
      setSkillsList([...skillsList, skills]);
      setSkills('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkillsList(skillsList.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!organizationName || !selectedBusinessModel || skillsList.length === 0) {
      setErrorMessage('All fields are mandatory.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-container form-submitted-message">
        <h2>Form Submitted Successfully!</h2>
        <p>Your organization has been created and skills updated.</p>
      </div>
    );
  }

  return (
    <div className="combined-form-container">
      <div className="form-container">
        <h2 className="form-title">Create a new organization</h2>
        <p className="form-description"><strong>This is your new organization within Supabase</strong></p>
        <p className="form-example">For example, you can use the name of your company or department</p>
        <div className="label-input-group">
          <label htmlFor="organizationName">Organization Name</label>
          <TextBox
            id="organizationName"
            className="text-input"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
        </div>
        <h3 className="form-subtitle">Business Models*</h3>
        <div className="business-model-options">
          {['Individuals B2C', 'B2B', 'B2B2C'].map((model) => (
            <div
              key={model}
              className={`option ${selectedBusinessModel === model ? 'selected' : ''}`}
              onClick={() => handleBusinessModelSelect(model)}
            >
              <h3>{model}</h3>
              <p>
                {model === 'Individuals B2C'
                  ? 'B2C (Business-to-Consumer) refers to companies that sell products or services directly to individual consumers rather than to other businesses or organizations. Eg: Amazon, Netflix, Airbnb, Uber, Spotify, HelloFresh.'
                  : model === 'B2B'
                  ? 'B2B (Business-to-Business) refers to companies that sell products or services to other businesses or organizations, rather than to individual consumers. Eg: Salesforce, HubSpot, Slack, Zoom, Dropbox Business, Mailchimp.'
                  : 'B2B2C (Business-to-Business-to-Consumer) refers to companies that provide products or services to businesses, which in turn sell those products or services to individual consumers. Eg: Shopify, AWS, Square.'}
              </p>
            </div>
          ))}
        </div>
        <h3 className="form-subtitle">Skills*</h3>
        <div className="label-input-group">
          <label className="skills-label">Skill / Software name</label>
          <div className="skills-input-group">
            <TextBox
              id="skills"
              className="skills-input"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
            <button type="button" className="button-add-skill" onClick={handleAddSkill}>
              Add Skill
            </button>
          </div>
        </div>
        {skillsList.length > 0 && (
          <div className="skills-list">
            {skillsList.map((skill, index) => (
              <div key={index} className="skill-chip">
                {skill}
                <span className="remove-skill" onClick={() => handleRemoveSkill(skill)}>×</span>
              </div>
            ))}
          </div>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-group">
          <button type="button" className="button-cancel" onClick={() => navigate('/')}>
            Cancel
          </button>
          <button type="submit" className="button-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CombinedForm;
