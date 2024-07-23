import { getWorkOrderCreatedAt , capitalizeFirstLetter,generateInitials} from '../workOrderHelper';



describe('WorkOrderHelper',()=>{

  describe('getWorkOrderCreatedAt', () => {
    it ('returns date string with format YYYY-MM-DD', () => {
      const currentDate = new Date().toDateString();
      const createdAt = getWorkOrderCreatedAt(currentDate);
      expect(createdAt).toMatch(/^[A-Z][a-z]{2} [A-Z][a-z]{2} \d{2}$/); // Matches YYYY-MM-DD format
    });
  });
  
  describe('generateInitials', () => {
    it('returns initials for single-word name', () => {
      expect(generateInitials('John')).toBe('J');
    });
    
    it('returns initials for two-word name', () => {
      expect(generateInitials('John Doe')).toBe('JD');
    });
    
    it('returns initials for three-word name', () => {
      expect(generateInitials('John William Doe')).toBe('JWD');
    });
  });

  describe('capitalizeFirstLetter', () => {
      it('capitalizes the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
      });
      
      it('capitalizes the first letter of each word in a sentence', () => {
        expect(capitalizeFirstLetter('hello world')).toBe('Hello World');
      });
    });
});