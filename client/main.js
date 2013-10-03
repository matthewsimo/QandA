Router.configure({
  layout: 'layout',
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
});

Router.map(function(){
  this.route('page-home', { path: '/' });
  this.route('page-current', { path: '/current' });
  this.route('page-archive', { path: '/archive' });
});

