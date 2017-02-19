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
    var vm = this;
    vm.showHeading = true;
    vm.loading = true;
    vm.results = false;
    vm.$http.get("https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=" + vm.details.agent)
      .then(function (res) {
        vm.loading = false;
        if (res.data.Results.length === 0) {
          vm.results = true;
          vm.showHeading = false;
        }
        vm.agents = res.data.Results;
        console.log(res);
      });
  }


}

export default AgentsController;
