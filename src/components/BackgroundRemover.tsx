
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';

interface BackgroundRemoverProps {
  onImageProcessed: (imageUrl: string) => void;
}

export function BackgroundRemover({ onImageProcessed }: BackgroundRemoverProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleProcessImage = async () => {
    try {
      setIsProcessing(true);
      
      // Load the uploaded image
      const response = await fetch('/lovable-uploads/7517fc22-216e-4c4e-afa5-4cce37a92ec0.png');
      const blob = await response.blob();
      const image = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(image);
      const processedImageUrl = URL.createObjectURL(processedBlob);
      
      onImageProcessed(processedImageUrl);
      
      toast({
        title: "Background Removed",
        description: "The background has been successfully removed from the image.",
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Error",
        description: "Failed to remove background from the image.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="text-center mb-6">
      <img 
        src="/lovable-uploads/7517fc22-216e-4c4e-afa5-4cce37a92ec0.png" 
        alt="Original" 
        className="max-w-xs mx-auto mb-4 rounded-lg shadow-md"
      />
      <Button 
        onClick={handleProcessImage} 
        disabled={isProcessing}
        className="bg-indigo-600 hover:bg-indigo-700"
      >
        {isProcessing ? "Removing Background..." : "Remove Background & Use Image"}
      </Button>
    </div>
  );
}
