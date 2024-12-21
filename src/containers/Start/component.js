import { mapGetters, mapActions } from 'vuex';
import UploadFileButton from '@/components/UploadFileButton';

export default {
  name: 'Start',
  components: {
    UploadFileButton,
  },
  computed: {
    ...mapGetters(['getAppTitle', 'getAppDescription', 'getTags', 'getImage']),
    icon() {
      return require('@/assets/clothing.svg');
    },
    currentIcon() {
      if (this.getImage !== '') return this.getImage;
      else return this.icon;
    },
    showTags() {
      return this.getTags.length;
    },
  },
  methods: {
    ...mapActions(['setImage', 'sendImageToGetTagged', 'setLoadingMessage', 'setIsLoading', 'clearLoadingMessage']),
    async handleFileUpload(event) {
      if (event.target.files.length) {
        this.setLoadingMessage('Tagowanie zdjęcia...');
        this.setIsLoading(true);
        try {
          this.setImage(event.target.files[0]);
          await this.sendImageToGetTagged(event.target.files[0]);
        } catch (error) {
          console.error(error);
        }
        this.setIsLoading(false);
        this.clearLoadingMessage();
      }
    },
  },
};
