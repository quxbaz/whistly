/*
  local variables:
  buffer-name: "workspace/fixture"
  end:
*/


define('workspace/fixture', function() {

  return {

    list: [
      {
        id: '0',
        title: 'List 1',
        items: ['a', 'b']
      },
      {
        id: '1',
        title: 'List 2',
        items: ['b']
      },
      {
        id: '3',
        title: 'List 3',
        item: []
      }
    ],

    list_items: [
      {
        id: 'a',
        text: 'item a'
      },
      {
        id: 'b',
        text: 'item b'
      }
    ]

  };

});
