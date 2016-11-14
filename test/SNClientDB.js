
describe('SNClientDB', () => {

  describe('constructor()', () => {

    it('should create IndexedDB for StickyNotes', (done) => {
      SNClientDB.settings_default.onStoreReady = () => {
        expect(instance).toBeDefined();
        done();
      };
      let instance = new SNClientDB();
    });

    describe('singleton get', () => {

      it('should work the same for promise version', (done) => {
        let instance1, instance2;
        SNClientDB.singleton.then((ins1) => {
          instance1 = ins1;
          SNClientDB.singleton.then((ins2) => {
            instance2 = ins2;
            expect(instance1).toBe(instance2);
            done();
          }).catch(() => {
            console.log("fail2")
            fail();
            done();
          })
        }).catch(() => {
          console.log("fail1")
          fail();
          done();
        })
      });

    });

  });


  describe('live instance', () => {

    let instance1;
    beforeEach((done) => {
      SNClientDB.singleton.then((instance)=>{
        instance1 = instance;
        done();
      });
    });

    describe('get notes', () => {

      it('should return 0 notes for empty db', (done) => {
        instance1.notes.getAll(
          (data) => {
            expect(Array.isArray(data)).toBeTruthy();
            fail();
            done();
          }, (error) => {
            console.log('error:', error)
            fail();
          }
        );
      });

    });

  });


});
