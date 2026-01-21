import React, { useState } from 'react';
import { CheckCircle, Circle, Upload, LogOut, Menu, X } from 'lucide-react';

const WOTSApp = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [applicationData, setApplicationData] = useState({
    // Personal Details
    title: '',
    name: '',
    email: '',
    phone: '',
    nationality: '',
    dateOfBirth: '',
    nationalInsurance: '',
    address: '',
    residentialStatus: '',
    employmentStatus: '',
    employerName: '',
    employmentStartDate: '',
    annualSalary: '',
    adverseCredit: '',
    adverseCreditDetails: '',
    
    // Company Details
    companyApplication: '',
    companyName: '',
    companyRegistration: '',
    sicCode: '',
    companyAddress: '',
    previousName: '',
    
    // Security Details
    securityAddress: '',
    isPurchase: '',
    estimatedValue: '',
    propertyDescription: '',
    chargeType: '',
    currentValue: '',
    completionDate: '',
    tenure: '',
    leaseholdTerm: '',
    existingMortgage: '',
    lender: '',
    outstandingBalance: '',
    repaymentCharge: '',
    accountNumber: '',
    
    // Loan Requirements
    netLoanAmount: '',
    loanTerm: '',
    repaymentType: '',
    purposeOfLoan: '',
    sourceOfDeposit: '',
    occupiedByFamily: '',
    businessPurpose: '',
    
    // Portfolio Summary
    hasBuyToLet: '',
    numberOfProperties: '',
    portfolioValue: '',
    outstandingMortgages: '',
    monthlyRental: '',
    monthlyPayments: '',
    
    // Bank Details
    bankName: '',
    accountName: '',
    accountNumberBank: '',
    sortCode: '',
    
    // Solicitor Details
    solicitorCompany: '',
    solicitorPhone: '',
    solicitorContact: '',
    solicitorEmail: '',
    solicitorAddress: '',
    
    // Accountant Details
    accountantCompany: '',
    accountantPhone: '',
    accountantContact: '',
    accountantEmail: '',
    accountantAddress: ''
  });

  const [formProgress, setFormProgress] = useState({
    application: false,
    loans: false,
    documents: false
  });

  const [uploadedDocs, setUploadedDocs] = useState({
    passport: false,
    proofOfAddress: false,
    bankStatement: false,
    payslip: false
  });

  const [acceptedDocuments, setAcceptedDocuments] = useState({
    termsAndConditions: false,
    privacyPolicy: false,
    loanAgreement: false
  });

  const [selectedLoan, setSelectedLoan] = useState(null);

  const loanOffers = [
    {
      id: 1,
      lender: 'Premier Finance Ltd',
      amount: '£250,000',
      rate: '3.75%',
      term: '25 years',
      monthlyPayment: '£1,287',
      features: ['No early repayment charges', 'Free valuation', 'Fixed rate for 5 years']
    },
    {
      id: 2,
      lender: 'Capital Bridge Lending',
      amount: '£250,000',
      rate: '4.10%',
      term: '25 years',
      monthlyPayment: '£1,347',
      features: ['Cashback offer £500', 'Free legal fees', 'Fixed rate for 2 years']
    },
    {
      id: 3,
      lender: 'Sterling Property Finance',
      amount: '£250,000',
      rate: '3.95%',
      term: '25 years',
      monthlyPayment: '£1,318',
      features: ['Offset mortgage available', 'Overpayment allowed', 'Fixed rate for 3 years']
    }
  ];

  // Simple login - just check the values directly
  const doLogin = () => {
    if (email === 'demo@wordonthestreet.com' && password === 'Demo2024!') {
      setIsLoggedIn(true);
      setCurrentPage('roadmap');
    } else {
      alert('Incorrect login! Use:\ndemo@wordonthestreet.com\nDemo2024!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
    setEmail('');
    setPassword('');
  };

  const handleInputChange = (field, value) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setFormProgress(prev => ({ ...prev, application: true }));
    alert('Application submitted successfully!');
    setCurrentPage('roadmap');
  };

  const fillDemoData = () => {
    setApplicationData({
      // Personal Details
      title: 'Mr',
      name: 'James Thompson',
      email: 'james.thompson@example.com',
      phone: '+44 7700 900123',
      nationality: 'British',
      dateOfBirth: '1985-06-15',
      nationalInsurance: 'QQ123456C',
      address: '42 Riverside Drive, Manchester, M1 2AB',
      residentialStatus: 'Owner',
      employmentStatus: 'Employed',
      employerName: 'Tech Solutions Ltd',
      employmentStartDate: '2018-03-01',
      annualSalary: '65000',
      adverseCredit: 'No',
      adverseCreditDetails: '',
      
      // Company Details
      companyApplication: 'No',
      companyName: '',
      companyRegistration: '',
      sicCode: '',
      companyAddress: '',
      previousName: '',
      
      // Security Details
      securityAddress: '15 Oakwood Avenue, Leeds, LS6 3QT',
      isPurchase: 'Yes',
      estimatedValue: '425000',
      propertyDescription: '4-bed detached house',
      chargeType: '1st',
      currentValue: '425000',
      completionDate: '2025-04-15',
      tenure: 'Freehold',
      leaseholdTerm: '',
      existingMortgage: 'No',
      lender: '',
      outstandingBalance: '',
      repaymentCharge: '',
      accountNumber: '',
      
      // Loan Requirements
      netLoanAmount: '340000',
      loanTerm: '25 years',
      repaymentType: 'Repayment',
      purposeOfLoan: 'Purchase',
      sourceOfDeposit: 'Savings and sale of existing property',
      occupiedByFamily: 'Yes',
      businessPurpose: 'No',
      
      // Portfolio Summary
      hasBuyToLet: 'Yes',
      numberOfProperties: '2',
      portfolioValue: '550000',
      outstandingMortgages: '320000',
      monthlyRental: '2400',
      monthlyPayments: '1600',
      
      // Bank Details
      bankName: 'HSBC',
      accountName: 'James Thompson',
      accountNumberBank: '12345678',
      sortCode: '40-47-84',
      
      // Solicitor Details
      solicitorCompany: 'Bennett & Associates Solicitors',
      solicitorPhone: '+44 20 7123 4567',
      solicitorContact: 'Sarah Bennett',
      solicitorEmail: 'sarah@bennettlaw.co.uk',
      solicitorAddress: '10 Legal Quarter, London, EC1A 2BB',
      
      // Accountant Details
      accountantCompany: 'Sterling Accounting Services',
      accountantPhone: '+44 161 987 6543',
      accountantContact: 'Michael Sterling',
      accountantEmail: 'michael@sterlingaccounting.co.uk',
      accountantAddress: '5 Finance Court, Manchester, M3 4LF'
    });
    alert('Demo data filled! Scroll down to review and submit.');
  };

  const handleLoanAcceptance = (loanId) => {
    setSelectedLoan(loanId);
    setFormProgress(prev => ({ ...prev, loans: true }));
    alert('Loan offer accepted! You can now proceed to document upload.');
  };

  const handleFileUpload = (docType) => {
    setUploadedDocs(prev => ({ ...prev, [docType]: true }));
  };

  const handleDocumentAccept = (docType) => {
    setAcceptedDocuments(prev => ({ ...prev, [docType]: !prev[docType] }));
  };

  const completeDocuments = () => {
    if (Object.values(uploadedDocs).every(v => v) && Object.values(acceptedDocuments).every(v => v)) {
      setFormProgress(prev => ({ ...prev, documents: true }));
      alert('All documents completed! Your application is now complete.');
      setCurrentPage('roadmap');
    } else {
      alert('Please upload all required documents and accept all agreements.');
    }
  };

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#fff8e5' }}>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="mb-4 py-4 px-6 rounded-2xl mx-auto inline-block" style={{ backgroundColor: '#15234a' }}>
                <div className="font-bold text-center" style={{ color: '#dfbd66', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                  <div className="text-xl">WORD ON</div>
                  <div className="text-xl">THE STREET</div>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                Welcome Back
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sign in to continue your application
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif', borderColor: '#dfbd66' }}
                  placeholder="demo@wordonthestreet.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none"
                  style={{ fontFamily: 'Poppins, sans-serif', borderColor: '#dfbd66' }}
                  placeholder="Demo2024!"
                />
              </div>

              <button
                onClick={doLogin}
                type="button"
                className="w-full py-3 rounded-xl text-white font-bold text-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#15234a', fontFamily: 'Poppins, sans-serif' }}
              >
                Sign In
              </button>
            </div>

            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#fff8e5' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                Demo Credentials:
              </p>
              <p className="text-xs mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#15234a' }}>
                <strong>Email:</strong> demo@wordonthestreet.com
              </p>
              <p className="text-xs mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#15234a' }}>
                <strong>Password:</strong> Demo2024!
              </p>
              <button
                type="button"
                onClick={() => {
                  setEmail('demo@wordonthestreet.com');
                  setPassword('Demo2024!');
                }}
                className="w-full py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#dfbd66', color: '#15234a', fontFamily: 'Poppins, sans-serif' }}
              >
                Fill Demo Credentials
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Navigation Component
  const Navigation = () => (
    <nav className="shadow-md" style={{ backgroundColor: '#15234a' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="py-2 px-3 rounded-lg" style={{ backgroundColor: '#dfbd66' }}>
              <div className="font-bold text-center leading-tight" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif', fontSize: '10px' }}>
                <div>WORD ON</div>
                <div>THE STREET</div>
              </div>
            </div>
            <span className="text-white font-bold text-lg hidden md:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Word On The Street
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage('roadmap')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === 'roadmap' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'roadmap' ? '#dfbd66' : 'transparent' }}
            >
              Roadmap
            </button>
            <button
              onClick={() => setCurrentPage('application')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === 'application' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'application' ? '#dfbd66' : 'transparent' }}
            >
              Application
            </button>
            <button
              onClick={() => setCurrentPage('loans')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === 'loans' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'loans' ? '#dfbd66' : 'transparent' }}
            >
              Loans
            </button>
            <button
              onClick={() => setCurrentPage('documents')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === 'documents' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'documents' ? '#dfbd66' : 'transparent' }}
            >
              Documents
            </button>
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 rounded-lg font-semibold text-white hover:opacity-80 transition-all flex items-center space-x-2"
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#dfbd66' }}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => { setCurrentPage('roadmap'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${currentPage === 'roadmap' ? 'text-white' : 'text-gray-300'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'roadmap' ? '#dfbd66' : 'transparent' }}
            >
              Roadmap
            </button>
            <button
              onClick={() => { setCurrentPage('application'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${currentPage === 'application' ? 'text-white' : 'text-gray-300'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'application' ? '#dfbd66' : 'transparent' }}
            >
              Application
            </button>
            <button
              onClick={() => { setCurrentPage('loans'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${currentPage === 'loans' ? 'text-white' : 'text-gray-300'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'loans' ? '#dfbd66' : 'transparent' }}
            >
              Loans
            </button>
            <button
              onClick={() => { setCurrentPage('documents'); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${currentPage === 'documents' ? 'text-white' : 'text-gray-300'}`}
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: currentPage === 'documents' ? '#dfbd66' : 'transparent' }}
            >
              Documents
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-lg font-semibold text-white flex items-center space-x-2"
              style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#dfbd66' }}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  // Roadmap Page
  const RoadmapPage = () => {
    const steps = [
      { name: 'Application', completed: formProgress.application, page: 'application' },
      { name: 'Loan Offers', completed: formProgress.loans, page: 'loans' },
      { name: 'Documents', completed: formProgress.documents, page: 'documents' },
      { name: 'Complete', completed: formProgress.application && formProgress.loans && formProgress.documents, page: null }
    ];

    return (
      <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: '#fff8e5' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
            Your Journey
          </h1>
          <p className="text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Track your application progress
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div 
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${step.page ? 'cursor-pointer hover:shadow-md hover:opacity-80' : ''}`}
                    style={{ backgroundColor: step.completed ? '#dfbd66' : '#fff8e5' }}
                    onClick={() => step.page && setCurrentPage(step.page)}
                  >
                    <div>
                      {step.completed ? (
                        <CheckCircle size={32} style={{ color: '#15234a' }} />
                      ) : (
                        <Circle size={32} style={{ color: '#15234a' }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                        {step.name}
                      </h3>
                      <p className="text-sm" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                        {step.completed ? 'Completed' : 'Pending'}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="absolute left-4 w-1 h-6 ml-4 mt-1"
                      style={{ backgroundColor: step.completed ? '#dfbd66' : '#d1d5db' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {formProgress.application && formProgress.loans && formProgress.documents && (
              <div className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: '#dfbd66' }}>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                  Congratulations! 🎉
                </h2>
                <p style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                  Your application is complete. We'll be in touch shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Application Page
  const ApplicationPage = () => {
    const FormSection = ({ title, children }) => (
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif', borderColor: '#dfbd66' }}>
          {title}
        </h2>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    );

    const FormField = ({ label, name, type = 'text', required = false, options = null, placeholder = '' }) => (
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
          {label} {required && <span style={{ color: '#dfbd66' }}>*</span>}
        </label>
        {options ? (
          <select
            value={applicationData[name]}
            onChange={(e) => handleInputChange(name, e.target.value)}
            required={required}
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none"
            style={{ fontFamily: 'Poppins, sans-serif', borderColor: '#dfbd66' }}
          >
            <option value="">Select...</option>
            {options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            value={applicationData[name]}
            onChange={(e) => handleInputChange(name, e.target.value)}
            required={required}
            placeholder={placeholder}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none"
            style={{ fontFamily: 'Poppins, sans-serif', borderColor: '#dfbd66' }}
          />
        ) : (
          <input
            type={type}
            value={applicationData[name]}
            onChange={(e) => handleInputChange(name, e.target.value)}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none"
            style={{ fontFamily: 'Poppins, sans-serif', borderColor: '#dfbd66' }}
          />
        )}
      </div>
    );

    return (
      <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: '#fff8e5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                Application Form
              </h1>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Complete all required fields to proceed
              </p>
            </div>
            <button
              type="button"
              onClick={fillDemoData}
              className="mt-4 md:mt-0 px-6 py-3 rounded-xl font-bold transition-all hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: '#dfbd66', color: '#15234a', fontFamily: 'Poppins, sans-serif' }}
            >
              Fill Demo Data
            </button>
          </div>

          <form onSubmit={handleApplicationSubmit}>
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">
              <FormSection title="Personal Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Title" name="title" required options={['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']} />
                  <FormField label="Full Name" name="name" required placeholder="John Smith" />
                  <FormField label="Email" name="email" type="email" required placeholder="john@example.com" />
                  <FormField label="Phone" name="phone" type="tel" required placeholder="+44 7700 900000" />
                  <FormField label="Nationality" name="nationality" required placeholder="British" />
                  <FormField label="Date of Birth" name="dateOfBirth" type="date" required />
                  <FormField label="National Insurance Number" name="nationalInsurance" required placeholder="QQ123456C" />
                  <FormField label="Residential Status" name="residentialStatus" required options={['Owner', 'Tenant', 'Living with Parents', 'Other']} />
                </div>
                <FormField label="Address" name="address" required placeholder="123 High Street, London, SW1A 1AA" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Employment Status" name="employmentStatus" required options={['Employed', 'Self-Employed', 'Unemployed', 'Retired']} />
                  <FormField label="Employer Name" name="employerName" required placeholder="Company Ltd" />
                  <FormField label="Employment Start Date" name="employmentStartDate" type="date" required />
                  <FormField label="Annual Salary" name="annualSalary" type="number" required placeholder="50000" />
                </div>

                <FormField label="Any adverse credit in the last 6 years?" name="adverseCredit" required options={['Yes', 'No']} />
                {applicationData.adverseCredit === 'Yes' && (
                  <FormField label="Please provide details" name="adverseCreditDetails" type="textarea" placeholder="Provide details..." />
                )}
              </FormSection>

              <FormSection title="Company Details">
                <FormField label="Company Application?" name="companyApplication" required options={['Yes', 'No']} />
                {applicationData.companyApplication === 'Yes' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField label="Company Name" name="companyName" placeholder="Business Ltd" />
                      <FormField label="Company Registration Number" name="companyRegistration" placeholder="12345678" />
                      <FormField label="SIC Code" name="sicCode" placeholder="12345" />
                      <FormField label="Previous Name (if applicable)" name="previousName" placeholder="Old Business Ltd" />
                    </div>
                    <FormField label="Company Address" name="companyAddress" placeholder="456 Business Park, London, E1 6AN" />
                  </>
                )}
              </FormSection>

              <FormSection title="Security Details">
                <FormField label="Security Address" name="securityAddress" required placeholder="789 Property Lane, Manchester, M1 1AA" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Is this a purchase?" name="isPurchase" required options={['Yes', 'No']} />
                  <FormField label="Estimated Value / Purchase Price" name="estimatedValue" type="number" required placeholder="350000" />
                  <FormField label="Property Description" name="propertyDescription" required placeholder="3-bed semi-detached" />
                  <FormField label="Charge Type" name="chargeType" required options={['1st', '2nd', 'Equitable']} />
                  <FormField label="Estimated Current Value" name="currentValue" type="number" required placeholder="350000" />
                  <FormField label="Expected Completion Date" name="completionDate" type="date" required />
                  <FormField label="Tenure" name="tenure" required options={['Freehold', 'Leasehold', 'Commonhold', 'Heritable Title (Scotland)']} />
                </div>
                {applicationData.tenure === 'Leasehold' && (
                  <FormField label="If leasehold, term remaining" name="leaseholdTerm" placeholder="99 years" />
                )}
                
                <FormField label="Existing mortgage/loan secured against this property?" name="existingMortgage" options={['Yes', 'No']} />
                {applicationData.existingMortgage === 'Yes' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Lender" name="lender" placeholder="Bank Name" />
                    <FormField label="Outstanding Balance" name="outstandingBalance" type="number" placeholder="150000" />
                    <FormField label="Early Repayment Charge" name="repaymentCharge" placeholder="£2500" />
                    <FormField label="Account/Reference Number" name="accountNumber" placeholder="ACC123456" />
                  </div>
                )}
              </FormSection>

              <FormSection title="Loan Requirements">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Net Loan Amount" name="netLoanAmount" type="number" required placeholder="250000" />
                  <FormField label="Loan Term" name="loanTerm" required placeholder="25 years" />
                  <FormField label="Repayment Type" name="repaymentType" placeholder="Repayment / Interest Only" />
                  <FormField label="Purpose of Loan" name="purposeOfLoan" required placeholder="Purchase / Remortgage" />
                </div>
                <FormField label="Source of Deposit" name="sourceOfDeposit" placeholder="Savings / Gift / Sale of Property" />
                <FormField label="Will more than 40% of the property be occupied by you or your immediate family?" name="occupiedByFamily" placeholder="Yes / No" />
                <FormField label="Will more than 50% of the loan be used for a business purpose?" name="businessPurpose" required options={['Yes', 'No']} />
              </FormSection>

              <FormSection title="Portfolio Summary">
                <FormField label="Do you currently hold any buy-to-let properties that are mortgaged?" name="hasBuyToLet" required options={['Yes', 'No']} />
                {applicationData.hasBuyToLet === 'Yes' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Total number of buy-to-let properties?" name="numberOfProperties" type="number" placeholder="3" />
                    <FormField label="Total value of buy-to-let portfolio?" name="portfolioValue" type="number" placeholder="750000" />
                    <FormField label="Total outstanding buy-to-let mortgages?" name="outstandingMortgages" type="number" placeholder="450000" />
                    <FormField label="Total monthly rental income?" name="monthlyRental" type="number" placeholder="3500" />
                    <FormField label="Total monthly mortgage payments?" name="monthlyPayments" type="number" placeholder="2100" />
                  </div>
                )}
              </FormSection>

              <FormSection title="Bank Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Bank Name" name="bankName" required placeholder="HSBC" />
                  <FormField label="Account Name" name="accountName" required placeholder="John Smith" />
                  <FormField label="Account Number" name="accountNumberBank" required placeholder="12345678" />
                  <FormField label="Sort Code" name="sortCode" required placeholder="12-34-56" />
                </div>
              </FormSection>

              <FormSection title="Solicitor Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Solicitor Company Name" name="solicitorCompany" placeholder="Law Firm & Co" />
                  <FormField label="Solicitor Phone" name="solicitorPhone" type="tel" placeholder="+44 20 1234 5678" />
                  <FormField label="Solicitor Contact" name="solicitorContact" placeholder="Jane Doe" />
                  <FormField label="Solicitor Email" name="solicitorEmail" type="email" placeholder="jane@lawfirm.com" />
                </div>
                <FormField label="Solicitor Address" name="solicitorAddress" placeholder="1 Legal Street, London, WC1A 1AA" />
              </FormSection>

              <FormSection title="Accountant Details (if applicable)">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="Accountant Company Name" name="accountantCompany" placeholder="Accounting Services Ltd" />
                  <FormField label="Accountant Phone" name="accountantPhone" type="tel" placeholder="+44 20 9876 5432" />
                  <FormField label="Accountant Contact" name="accountantContact" placeholder="Bob Johnson" />
                  <FormField label="Accountant Email" name="accountantEmail" type="email" placeholder="bob@accounting.com" />
                </div>
                <FormField label="Accountant Address" name="accountantAddress" placeholder="2 Finance Road, London, EC1A 1AA" />
              </FormSection>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={(e) => {
                    const form = document.querySelector('form');
                    if (form && form.checkValidity()) {
                      handleApplicationSubmit(e);
                    } else {
                      // Trigger HTML5 validation messages
                      form.reportValidity();
                    }
                  }}
                  className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: '#15234a', fontFamily: 'Poppins, sans-serif' }}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Loans Page
  const LoansPage = () => (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: '#fff8e5' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
          Loan Offers
        </h1>
        <p className="text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Review and accept your personalized loan offers
        </p>

        {!formProgress.application && (
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6 text-center">
            <p className="text-lg" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
              Please complete your application first to view loan offers.
            </p>
            <button
              onClick={() => setCurrentPage('application')}
              className="mt-4 px-6 py-3 rounded-xl text-white font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: '#15234a', fontFamily: 'Poppins, sans-serif' }}
            >
              Go to Application
            </button>
          </div>
        )}

        {formProgress.application && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanOffers.map(loan => (
              <div key={loan.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="p-6" style={{ backgroundColor: selectedLoan === loan.id ? '#dfbd66' : '#fff8e5' }}>
                  <h2 className="text-xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                    {loan.lender}
                  </h2>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                    {loan.amount}
                  </div>
                  <div className="text-sm" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                    {loan.rate} APR • {loan.term}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm font-semibold mb-1" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      Monthly Payment
                    </div>
                    <div className="text-2xl font-bold" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      {loan.monthlyPayment}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start space-x-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#dfbd66' }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleLoanAcceptance(loan.id)}
                    disabled={selectedLoan === loan.id}
                    className="w-full py-3 rounded-xl text-white font-bold transition-all hover:opacity-90 disabled:opacity-50"
                    style={{ 
                      backgroundColor: selectedLoan === loan.id ? '#15234a' : '#dfbd66',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    {selectedLoan === loan.id ? 'Selected ✓' : 'Accept Offer'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Documents Page
  const DocumentsPage = () => (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: '#fff8e5' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
          Documents
        </h1>
        <p className="text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Upload required documents and accept agreements
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
            Upload Documents
          </h2>
          
          <div className="space-y-4">
            {Object.entries(uploadedDocs).map(([docType, uploaded]) => (
              <div key={docType} className="p-4 rounded-xl flex items-center justify-between" style={{ backgroundColor: uploaded ? '#dfbd66' : '#fff8e5' }}>
                <div className="flex items-center space-x-3">
                  <Upload size={24} style={{ color: '#15234a' }} />
                  <div>
                    <div className="font-semibold capitalize" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      {docType.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      {uploaded ? 'Uploaded ✓' : 'Required'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleFileUpload(docType)}
                  disabled={uploaded}
                  className="px-4 py-2 rounded-lg text-white font-semibold transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#15234a', fontFamily: 'Poppins, sans-serif' }}
                >
                  {uploaded ? 'Done' : 'Upload'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
            Accept Documents
          </h2>
          
          <div className="space-y-4">
            {Object.entries(acceptedDocuments).map(([docType, accepted]) => (
              <div key={docType} className="p-4 rounded-xl" style={{ backgroundColor: '#fff8e5' }}>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => handleDocumentAccept(docType)}
                    className="mt-1 w-5 h-5 rounded"
                    style={{ accentColor: '#dfbd66' }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold capitalize" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      {docType.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm mt-1" style={{ color: '#15234a', fontFamily: 'Poppins, sans-serif' }}>
                      I have read and accept the {docType.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={completeDocuments}
          className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:opacity-90"
          style={{ backgroundColor: '#15234a', fontFamily: 'Poppins, sans-serif' }}
        >
          Complete Documents
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navigation />
      {currentPage === 'roadmap' && <RoadmapPage />}
      {currentPage === 'application' && <ApplicationPage />}
      {currentPage === 'loans' && <LoansPage />}
      {currentPage === 'documents' && <DocumentsPage />}
    </div>
  );
};

export default WOTSApp;
