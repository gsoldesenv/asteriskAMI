const AsteriskManager = require('asterisk-manager');

const ami = new AsteriskManager(
  5038,                  // porta do AMI
  '172.16.96.36',       // IP do servidor Issabel
  'admin',               // usuário definido no manager.conf
  'Red3202@losg',     // senha definida no manager.conf
  true                   // habilita eventos
);

ami.keepConnected();

ami.on('connect', () => {
  console.log('✅ Conectado ao AMI com sucesso!');
});

ami.on('hangup', (evt) => {
  console.log('📞 Chamada finalizada:', evt);
});

ami.on('error', (err) => {
  console.error('❌ Erro na conexão:', err);
});
