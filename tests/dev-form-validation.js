describe('Contact form validation', function(){
	describe('Mobile telephone number', function(){
		it('should be North American local', function(){
			var mockPhone = '1-800-123-1234';
			expect(validate.phone.isNALocal(mockPhone)).to.not.be.ok();
		})
		it('should must not contain an extension')
		it('should be written in any format while stored as unformatted 10 digits')
	})
	describe('Business telephone number', function(){
		it('should be North American local')
		it('could contain an extension')
		it('should be written in any format while stored as unformatted 10 digits')
	})
	describe('Email address', function(){
		it('should contain an at sign', function(){
			var mockEmail = 'fake.ca';
			expect(validate.email.hasAtSign(mockEmail)).to.not.be.ok();
		})
	})
})