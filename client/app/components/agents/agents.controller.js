class AgentsController {
  constructor($http) {
    'ngInject';
    this.name = 'agents';
    this.$http = $http;
    this.details = {};
    this.showHeading = false;
    this.loading = false;
  }
  findAgents() {
    let vm = this;
    vm.showHeading = true;
    vm.loading = true;
    vm.results = false;
    vm.$http.get("https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=" + vm.details.agent)
      .then((response) => {
        vm.loading = false;
        if (response.data.Results.length === 0) {
          vm.results = true;
          vm.showHeading = false;
        }
        vm.agents = response.data.Results;
      });
  }
}
export default AgentsController;
