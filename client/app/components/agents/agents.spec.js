import AgentsModule from './agents'
import AgentsController from './agents.controller';
import AgentsComponent from './agents.component';
import AgentsTemplate from './agents.html';

describe('Agents', () => {
  let $rootScope, makeController,$state,$location,$compile;

  beforeEach(window.module(AgentsModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    makeController = () => {
      return new AgentsController();
    };
     $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
     it('Agent component should be visible when navigates to /agent', () => {
      $location.url('/agents');
      $rootScope.$digest();
      expect($state.current.component).to.eq('agents');
    });
  });

  describe('Controller', () => {
    // controller specs
    it('has the properties in Agent Controller', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
      expect(controller).to.have.property('showHeading');
      expect(controller).to.have.property('loading');
      expect(controller).to.have.property('details');
         
    });
  });



  describe('Component', () => {
      // component/directive specs
      let component = AgentsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AgentsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AgentsController);
      });
  });
});
