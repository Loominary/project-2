declare module 'draftjs-to-markdown' {
    import { ContentState } from 'draft-js';
  
    interface RawDraftContentState {
      blocks: any[];
      entityMap: Record<string, any>;
    }
    type hashConfig = {
        trigger: '#',
        separator: ' ',
      }
      type config = {
        
            blockTypesMapping : {/* mappings */},
            emptyLineBeforeBlock : true
          
      }

    function markdownToDraft(markdown: string): ContentState;
    function draftToMarkdown(contentState: RawDraftContentState): string;
  }


  
  