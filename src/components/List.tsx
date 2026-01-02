import ListItem from "./ListItem";

type ListProps = {
  list_name: string;
};

function generateItems(list_name: string) {
  let data = [];
  switch (list_name) {
    case 'education':
      data = [
        { name: 'Education A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, nunc id facilisis pretium, ligula mi varius velit, vitae placerat sapien quam eget nibh. Vivamus non hendrerit justo, non aliquet nunc. Nulla facilisi. In hac habitasse platea dictumst. Morbi hendrerit tristique erat, eu malesuada elit interdum id. Donec sed ex lorem. In sapien ipsum, tincidunt at aliquam at, pulvinar at nisi. Proin ut pharetra turpis, vel viverra arcu. Nunc fringilla rutrum felis, a ornare libero pharetra vitae. Suspendisse tristique placerat molestie. Nunc accumsan at sem fermentum eleifend. Fusce metus mauris, maximus vitae ullamcorper iaculis, volutpat a magna. In eleifend posuere erat, vel lobortis nisl dignissim ut. Cras sit amet gravida enim. Curabitur scelerisque mauris id dui aliquam, sed vehicula risus tincidunt.' },
        { name: 'Education B', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, nunc id facilisis pretium, ligula mi varius velit, vitae placerat sapien quam eget nibh. Vivamus non hendrerit justo, non aliquet nunc. Nulla facilisi. In hac habitasse platea dictumst. Morbi hendrerit tristique erat, eu malesuada elit interdum id. Donec sed ex lorem. In sapien ipsum, tincidunt at aliquam at, pulvinar at nisi. Proin ut pharetra turpis, vel viverra arcu. Nunc fringilla rutrum felis, a ornare libero pharetra vitae. Suspendisse tristique placerat molestie. Nunc accumsan at sem fermentum eleifend. Fusce metus mauris, maximus vitae ullamcorper iaculis, volutpat a magna. In eleifend posuere erat, vel lobortis nisl dignissim ut. Cras sit amet gravida enim. Curabitur scelerisque mauris id dui aliquam, sed vehicula risus tincidunt.' },
      ];
      break;
    case 'experience':
      data = [
        { name: 'Experience A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, nunc id facilisis pretium, ligula mi varius velit, vitae placerat sapien quam eget nibh. Vivamus non hendrerit justo, non aliquet nunc. Nulla facilisi. In hac habitasse platea dictumst. Morbi hendrerit tristique erat, eu malesuada elit interdum id. Donec sed ex lorem. In sapien ipsum, tincidunt at aliquam at, pulvinar at nisi. Proin ut pharetra turpis, vel viverra arcu. Nunc fringilla rutrum felis, a ornare libero pharetra vitae. Suspendisse tristique placerat molestie. Nunc accumsan at sem fermentum eleifend. Fusce metus mauris, maximus vitae ullamcorper iaculis, volutpat a magna. In eleifend posuere erat, vel lobortis nisl dignissim ut. Cras sit amet gravida enim. Curabitur scelerisque mauris id dui aliquam, sed vehicula risus tincidunt.' },
        { name: 'Experience B', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, nunc id facilisis pretium, ligula mi varius velit, vitae placerat sapien quam eget nibh. Vivamus non hendrerit justo, non aliquet nunc. Nulla facilisi. In hac habitasse platea dictumst. Morbi hendrerit tristique erat, eu malesuada elit interdum id. Donec sed ex lorem. In sapien ipsum, tincidunt at aliquam at, pulvinar at nisi. Proin ut pharetra turpis, vel viverra arcu. Nunc fringilla rutrum felis, a ornare libero pharetra vitae. Suspendisse tristique placerat molestie. Nunc accumsan at sem fermentum eleifend. Fusce metus mauris, maximus vitae ullamcorper iaculis, volutpat a magna. In eleifend posuere erat, vel lobortis nisl dignissim ut. Cras sit amet gravida enim. Curabitur scelerisque mauris id dui aliquam, sed vehicula risus tincidunt.' },
      ];
      break;
    case 'projects':
      data = [
        { name: 'Project A', description: 'Description of Project A' },
        { name: 'Project B', description: 'Description of Project B' },
      ];
      break;
    default:
      return [];
  }
  return data.map(item => 
    <ListItem name={item.name} description={item.description} />
  );
}

export default function List({ list_name }: ListProps) {
  const items = generateItems(list_name);
  return (
    <ul>
      {items}
    </ul>
  );
}