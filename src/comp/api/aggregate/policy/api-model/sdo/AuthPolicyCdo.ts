class AuthPolicyCdo {
  pavilionId: string;
  
  constructor(pavilionId: string) {
    this.pavilionId = pavilionId;
  }

  static new(): AuthPolicyCdo {
    return new AuthPolicyCdo('');
  }

}

export default AuthPolicyCdo;

